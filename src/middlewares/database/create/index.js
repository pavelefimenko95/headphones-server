import { product as Product } from '../../../models';

export const createProduct = async (req, res, next) => {
    try {
        let product = await Product.create(req.body);

        res.send({ product });
    } catch(e) {
        next(e);
    }
};