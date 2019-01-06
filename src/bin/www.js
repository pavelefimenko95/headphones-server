require('dotenv').config();
require('babel-register')({
    presets: ['env'],
    plugins: ['transform-object-rest-spread']
});
require('babel-polyfill');

let sequelize = require('../models/index').sequelize;
let app = require('../app');

sequelize.sync().then(() => {
    app.listen(7000, () => {

        console.log('app is listening on port 7000');
    });
});