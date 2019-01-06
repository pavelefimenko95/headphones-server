import { Router } from 'express';
import databaseRoutes from './database';

let router = Router();

router.use('/database', databaseRoutes);

export default router;