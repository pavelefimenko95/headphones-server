import { Router } from 'express';
import databaseRoutes from './database';
import utilsRoutes from './utils';
import infoRoutes from './info';

let router = Router();

router.use('/database', databaseRoutes);

router.use('/utils', utilsRoutes);

router.use('/info', infoRoutes);

export default router;