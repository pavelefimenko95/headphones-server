import * as productConstants from "../constants/product";

export default (sequelize, Sequelize) => {
    let SoldProduct = sequelize.define('soldProduct', {
        type: {
            type: Sequelize.ENUM(
                productConstants.MOUSE,
                productConstants.KEYBOARD,
                productConstants.HEADPHONES
            ),
            notEmpty: true,
            allowNull: false
        },
        image: {
            type: Sequelize.STRING,
            notEmpty: true,
            allowNull: false
        },
        landingImage: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING,
            notEmpty: true,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            notEmpty: true,
            allowNull: false
        },
        price: {
            type: Sequelize.INTEGER,
            notEmpty: true,
            allowNull: false
        },
        specs: {
            type: Sequelize.ARRAY(Sequelize.STRING)
        },
        quantity: {
            type: Sequelize.INTEGER,
            notEmpty: true,
            allowNull: false
        }
    });

    SoldProduct.associate = models => {
        SoldProduct.belongsTo(models.cartInfo);
    };

    return SoldProduct;
};