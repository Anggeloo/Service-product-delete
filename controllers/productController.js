const productService = require('../services/productService');

exports.deleteProduct = async (req, res) => {
    const { codigo_producto } = req.params;

    try {
        const response = await productService.deleteProduct(codigo_producto);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
