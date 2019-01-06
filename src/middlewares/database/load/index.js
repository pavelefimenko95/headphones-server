import { product as Product } from '../../../models';

export const loadProducts = async (req, res, next) => {
    try {
        let products = await Product.findAll();

        res.send({ products });
    } catch(e) {
        next(e);
    }
};