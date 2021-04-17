import './config/env';
import createApp from './config/express';
import logger from './config/logger'

const app = createApp();

const startExpress = () => app.listen(process.env.PORT, () =>
    logger.info(`server is listening on port ${process.env.PORT}`)
);

startExpress();