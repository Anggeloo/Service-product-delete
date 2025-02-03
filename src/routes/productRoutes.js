const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

/**
 * @swagger
 * /products/delete/{codice}:
 *   delete:
 *     summary: Delete a product
 *     tags: [Product Delete]
 *     parameters:
 *       - in: path
 *         name: codice
 *         required: true
 *         schema:
 *           type: string
 *         description: Codice the product to delete
 *     responses:
 *       200:
 *         description: Product deleted successfully
 */
router.delete('/products/delete/:codice', productController.deleteProduct);

module.exports = router;
