import { Router } from 'express';
import { createProduct } from '../../../middlewares/database/create';

let router = Router();

router.post('/product', createProduct);

export default router;