import * as productConstants from '../constants/product';

module.exports = (sequelize, Sequelize) => {
    return sequelize.define('product', {
        type: {
            type: Sequelize.ENUM(
                productConstants.MOUSE,
                productConstants.KEYBOARD,
                productConstants.MOUSE_PAD
            ),
            notEmpty: true,
            allowNull: false
        },
        image: {
            type: Sequelize.STRING,
            notEmpty: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            notEmpty: true,
            allowNull: false
        },
        price: {
            type: Sequelize.INTEGER,
            notEmpty: true,
            allowNull: false
        }
    });
};