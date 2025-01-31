const pool = require('../config/db');

exports.deleteProduct = async (codigo_producto) => {
    const query = `
        UPDATE productos
        SET estado = false, fecha_actualizacion = CURRENT_TIMESTAMP
        WHERE codigo_producto = $1
        RETURNING *;
    `;

    const { rows } = await pool.query(query, [codigo_producto]);
    return rows[0];
};
