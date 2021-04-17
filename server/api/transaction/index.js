import { AsyncRouter } from 'express-async-router'
import { checkSchema, validationResult } from 'express-validator';

import { get, addTransaction, compressTransactions } from './transaction.controller'

const router = AsyncRouter();

router.get('/', get);
router.put('/compress', compressTransactions);
router.post('/', addTransaction);

export default router;