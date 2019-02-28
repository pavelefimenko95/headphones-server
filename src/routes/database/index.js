import { Router } from 'express';
import databaseCreateRoutes from './create';
import databaseDeleteRoutes from './delete';
import databaseLoadRoutes from './load';
import databaseUpdateRoutes from './update';

let router = Router();

router.use('/create', databaseCreateRoutes);

router.use('/delete', databaseDeleteRoutes);

router.use('/load', databaseLoadRoutes);

router.use('/update', databaseUpdateRoutes);

export default router;