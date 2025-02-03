const productModel = require('../models/productModel');

exports.deleteProduct = async (codice) => {
    return await productModel.deleteProduct(codice);
};