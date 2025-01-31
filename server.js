const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(bodyParser.json());

<<<<<<< HEAD
// Importar rutas
const productRoutes = require('./routes/productRoutes');

// Usar rutas
app.use('/products', productRoutes);
=======
app.delete('/products/:product_code', async (req, res) => {
  const { product_code } = req.params;  
  try {
    const query = `
      UPDATE products
      SET status = false, updated_at = CURRENT_TIMESTAMP
      WHERE product_code = $1
      RETURNING *;
    `;

    const result = await pool.query(query, [product_code]);

    if (result.rowCount === 0) {
      return res.status(404).json(ApiResponse('error', null, 'Product not found.'));
    }
    res.json(ApiResponse('success', result.rows[0], 'Product successfully deactivated.'));
  } catch (err) {
    console.log(err);
    res.status(500).json(ApiResponse('error', null, 'Error deactivating the product.'));
  }
});
>>>>>>> c2efcefa2395ff46e0e12feaf0985380088b667f

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
