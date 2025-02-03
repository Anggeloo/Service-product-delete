const db = require('../db/db');

const deleteProduct = async (codice) => {
    const query = `
      UPDATE product
      SET status = false, updated_at = CURRENT_TIMESTAMP
      WHERE product_code = $1
      RETURNING *;
    `;
    const result = await db.query(query, [codice]);
    return result.rows[0];

};

module.exports = { deleteProduct };