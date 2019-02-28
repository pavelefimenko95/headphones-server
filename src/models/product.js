import * as productConstants from '../constants/product';

module.exports = (sequelize, Sequelize) => {
    let Product = sequelize.define('product', {
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
        }
    });

    Product.associate = models => {
        Product.hasMany(models.gallery, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
    };

    return Product;
};