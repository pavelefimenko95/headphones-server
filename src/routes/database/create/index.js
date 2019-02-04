import { Router } from 'express';
import { createProduct, createCartInfo } from '../../../middlewares/database/create';

let router = Router();

router.post('/product', createProduct);

router.post('/cart-info', createCartInfo);

export default router;