import express from 'express';
import indexRouter from './routes';
import createError from 'http-errors';

let app = express();

app.use('/content/images/', express.static(__dirname + "/public/images"));

app.use('/', indexRouter);

app.use((req, res, next) => {
    console.error(createError(404, 'Not found'));
    res.status(404).send(createError(404, 'Not found'));
});

app.use((err, req, res, next) => {
    console.error(err);

    res.status(err.code).send(err);
});

module.exports = app;