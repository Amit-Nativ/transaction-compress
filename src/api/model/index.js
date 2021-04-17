import { AsyncRouter } from 'express-async-router'
import { checkSchema, validationResult } from 'express-validator';

import { get } from './model.controller'

const router = AsyncRouter();

router.get('/', checkSchema({
    amit: {
        in: ['params', 'query'],
        errorMessage: 'ID is wrong',
        isInt: true
    }
}), (req, res, next) => {
    const errors = validationResult(req);
    console.log(req.query);

    if (!errors.isEmpty()) {
        return res.status(422).jsonp(errors.array());
    }

    next();
}, get);

export default router;