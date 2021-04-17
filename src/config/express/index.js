import express from 'express'
import compression from 'compression'
import helmet from 'helmet'
import { urlencoded, json } from 'body-parser';
import errorMiddleware from 'error-middleware';

import routes from './routes'
import logErrorsMiddleware from '../../middlewares/error-log-middleware'

export default () => {
    const app = express();

    app.use(helmet())
    app.use(compression());
    app.use(urlencoded({ extended: false }));
    app.use(json());

    app.use('/api', routes)

    app.use(logErrorsMiddleware);
    app.use(errorMiddleware);

    return app;
}