import { AsyncRouter } from 'express-async-router'

import modelRouter from '../../api/model'

const router = AsyncRouter();

router.use('/model', modelRouter);

export default router;