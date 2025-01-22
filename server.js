const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./db/db');
const ApiResponse = require('./models/ApiResponse');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.delete('/products/:codigo_producto', async (req, res) => {
  const { codigo_producto } = req.params;  
  try {
    const query = `
      UPDATE productos
      SET estado = false, fecha_actualizacion = CURRENT_TIMESTAMP
      WHERE codigo_producto = $1
      RETURNING *;
    `;

    const result = await pool.query(query, [codigo_producto]);

    if (result.rowCount === 0) {
      return res.status(404).json(ApiResponse('error', null, 'Producto no encontrado.'));
    }
    res.json(ApiResponse('success', result.rows[0], 'Producto desactivado exitosamente.'));
  } catch (err) {
    console.log(err);
    res.status(500).json(ApiResponse('error', null, 'Error al desactivar el producto.'));
  }
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
