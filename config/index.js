module.exports = {
    db: {
        username: process.env.DB_USERNAME || 'postgres',
        password: process.env.DB_PASSWORD || 'postgres',
        database: process.env.DB_NAME || 'online-store',
        host: '127.0.0.1',
        dialect: 'postgres'
    }
};
