import { BadRequestError } from 'error-middleware/errors'

export const get = (req, res) => {
    console.log('controller');
    // throw new BadRequestError('example')
    res.send(req.query)
};