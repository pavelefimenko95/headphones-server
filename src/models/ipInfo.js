export default (sequelize, Sequelize) => {
    return sequelize.define('ipInfo', {
        ip: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        requestsCount: {
            type: Sequelize.INTEGER
        }
    })
};