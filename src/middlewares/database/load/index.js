import {
    product as Product,
    gallery as Gallery,
    soldProduct as SoldProduct,
    cartInfo as CartInfo
} from '../../../models';

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

export const loadSoldProducts = async (req, res, next) => {
    try {
        let soldProductsList = await SoldProduct.findAll({
            where: {
                cartInfoId: req.query.cartInfoId
            }
        });

        res.send({ soldProductsList });
    } catch(e) {
        next(e);
    }
};