const ApiResponse = require('../models/ApiResponse');
const productService = require('../services/productService');

exports.deleteProduct = async (req, res) => {
    try {
        const { codice } = req.params;  
        const result = await productService.deleteProduct(codice);

        if (!result) {
            return res.status(404).json(ApiResponse('error', null, 'Product not found.'));
        }
        
        res.json(ApiResponse('success', result , 'Product successfully deactivated.'));
    } catch (err) {
        console.log(err);
        res.status(500).json(ApiResponse('error', null, 'Error deactivating the product.'));
    }
};