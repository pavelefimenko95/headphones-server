import { order as Order, cartInfo as CartInfo, soldProduct as SoldProduct, ipInfo as IpInfo } from '../../models';

export const loadOrders = async (req, res, next) => {
    try {
        let orders = await Order.findAll();

        let associatedOrders = await Promise.all(orders.map(order => new Promise(async resolve => {
            resolve({
                orderInfo: order,
                cartInfo: await CartInfo.findOne({
                    where: {
                        id: order.cartInfoId
                    },
                    include: [SoldProduct]
                })
            });
        })));

        associatedOrders = associatedOrders.map(order => ({
                orderInfo: order.orderInfo.get(),
                cartInfo: {
                    ...order.cartInfo.get(),
                    soldProducts: order.cartInfo.soldProducts.map(soldProduct => soldProduct.get())
                }}));

        res.send(associatedOrders);
    } catch(e) {
        next(e);
    }
};

export const loadIpInfos = async (req, res, next) => {
    try {
        let ipInfos = await IpInfo.findAll();

        res.send(ipInfos);
    } catch(e) {
        next(e);
    }
};