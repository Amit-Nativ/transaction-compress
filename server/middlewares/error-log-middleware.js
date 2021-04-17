import logger from '../config/logger'

export default (err, req, res, next) => {
    logger.error(err);

    next(err)
}