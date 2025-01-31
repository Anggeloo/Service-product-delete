const productRepository = require('../repositories/productRepository');

exports.deleteProduct = async (codigo_producto) => {
    return await productRepository.deleteProduct(codigo_producto);
};
