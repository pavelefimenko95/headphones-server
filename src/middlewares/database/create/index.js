import uuid from 'uuid';
import { product as Product, cartInfo as CartInfo, soldProduct as SoldProduct, sequelize } from '../../../models';

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

        let extendedCartProducts = cartProductsList.map(cartProduct => ({
            cartInfoId: cartInfo.id,
            quantity: cartProduct.quantity,
            ...products.find(product => product.id === cartProduct.id).dataValues
        }));

        await SoldProduct.bulkCreate(extendedCartProducts);

        res.send({
            cartInfoId: cartInfo.id
        });
    } catch(e) {
        next(e);
    }
};