import { Router } from 'express';
import { createProduct, createCartInfo, createOrder } from '../../../middlewares/database/create';

let router = Router();

router.post('/product', createProduct);

router.post('/cart-info', createCartInfo);

router.post('/order', createOrder);

export default router;