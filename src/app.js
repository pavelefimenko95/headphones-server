import express from 'express';
import bodyParser from 'body-parser'
import indexRouter from './routes';
import createError from 'http-errors';
import cors from 'cors';
import { allRequests } from './middlewares/allRequests';

let app = express();

app.set('trust proxy', true);

app.use(cors({origin: '*'}));

app.use('/content/images/', express.static(__dirname + "/public/images"));

app.use(bodyParser());

app.use(allRequests);

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