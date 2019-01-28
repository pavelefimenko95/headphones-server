module.exports = (sequelize, Sequelize) => {
    let Gallery = sequelize.define('gallery', {
        collection: {
            type: Sequelize.ARRAY(Sequelize.STRING),
            notEmpty: true,
            allowNull: false
        }
    });

    Gallery.associate = models => {
        Gallery.belongsTo(models.product);
    };

    return Gallery;
};