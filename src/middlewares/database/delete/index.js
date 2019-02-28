import { product as Product } from '../../../models';

export const deleteProduct = async (req, res, next) => {
    try {
        await Product.destroy(req.body.id);

        res.sendStatus(200);
    } catch(e) {
        next(e);
    }
};