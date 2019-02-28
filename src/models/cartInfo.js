export default (sequelize, Sequelize) => {
    let CartInfo = sequelize.define('cartInfo', {
        id: {
            primaryKey: true,
            type: Sequelize.UUID
        },
        totalPrice: {
            type: Sequelize.INTEGER,
            allowNull: false,
            notEmpty: true
        }
    });

    CartInfo.associate = models => {
        CartInfo.hasMany(models.soldProduct, {foreignKey: { allowNull: false }, onDelete: 'CASCADE'});
        CartInfo.hasOne(models.order, {foreignKey: { allowNull: false }, onDelete: 'CASCADE'});
    };

    return CartInfo;
};