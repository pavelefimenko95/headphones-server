import { Router } from 'express';
import databaseRoutes from './database';
import utilsRoutes from './utils';

let router = Router();

router.use('/database', databaseRoutes);

router.use('/utils', utilsRoutes);

export default router;