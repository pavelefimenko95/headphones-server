import uuid from 'uuid';
import {
    product as Product,
    cartInfo as CartInfo,
    soldProduct as SoldProduct,
    order as Order,
    sequelize } from '../../../models';

let Op = sequelize.Op;

export const createProduct = async (req, res, next) => {
    try {
        let product = await Product.create(req.body);

        res.send({ product });
    } catch(e) {
        next(e);
    }
};

export const createCartInfo = async (req, res, next) => {
    try {
        let { totalPrice, cartProductsList } = req.body;

        let cartInfo = await CartInfo.create({
            id: uuid(),
            totalPrice
        });

        let products = await Product.findAll({
            where: {
                id: {
                    [Op.in]: cartProductsList.map(cartProduct => cartProduct.id)
                }
            }
        });

        let extendedCartProducts = cartProductsList.map(cartProduct => {
            let product = products.find(product => product.id === cartProduct.id).dataValues;
            delete product.id;

            return {
                cartInfoId: cartInfo.id,
                quantity: cartProduct.quantity,
                ...product
            };
        });

        await SoldProduct.bulkCreate(extendedCartProducts);

        res.send({
            cartInfoId: cartInfo.id
        });
    } catch(e) {
        next(e);
    }
};

export const createOrder = async (req, res, next) => {
    try {
        await Order.create(req.body);

        res.sendStatus(200);
    } catch(e) {
        next(e);
    }
};