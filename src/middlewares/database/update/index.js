import { product as Product } from '../../../models';

export const updateProduct = async (req, res, next) => {
    try {
        let productResponse = await Product.update(req.body, {
            where: {
                id: req.body.id
            },
            returning: true
        });

        res.send({
            product: productResponse[1][0]
        });
    } catch(e) {
        next(e);
    }
};