import { Router } from 'express';
import { loadProducts } from '../../../middlewares/database/load';

let router = Router();

router.get('/products', loadProducts);

export default router;