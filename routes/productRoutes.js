const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

/**
 * @swagger
 * /products/{codigo_producto}:
 *   delete:
 *     summary: Deshabilita un producto por código
 *     description: Cambia el estado de un producto a `false` en la base de datos.
 *     tags:
 *       - Productos
 *     parameters:
 *       - in: path
 *         name: codigo_producto
 *         required: true
 *         description: Código del producto a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Producto eliminado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Producto eliminado exitosamente"
 *       500:
 *         description: Error interno del servidor
 */
router.delete('/:codigo_producto', productController.deleteProduct);

module.exports = router;
