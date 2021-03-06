export default (sequelize, Sequelize) => {
    let Order = sequelize.define('order', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            notEmpty: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            notEmpty: true
        },
        city: {
            type: Sequelize.STRING,
            allowNull: false,
            notEmpty: true
        },
        postOffice: {
            type: Sequelize.STRING,
            allowNull: false,
            notEmpty: true
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: false,
            notEmpty: true
        },
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        }
    });

    Order.associate = models => {
        Order.belongsTo(models.cartInfo, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
    };

    return Order;
};