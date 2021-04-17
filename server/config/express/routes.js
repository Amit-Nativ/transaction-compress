import { AsyncRouter } from 'express-async-router'

import transactionRouter from '../../api/transaction'

const router = AsyncRouter();

router.use('/transactions', transactionRouter);

export default router;