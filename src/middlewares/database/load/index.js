import { product as Product, gallery as Gallery } from '../../../models';

export const loadProducts = async (req, res, next) => {
    try {
        let products = await Product.findAll();

        res.send({ products });
    } catch(e) {
        next(e);
    }
};

export const loadGalleries = async (req, res, next) => {
    try {
        let galleries = await Gallery.findAll();

        res.send({ galleries });
    } catch(e) {
        next(e);
    }
};