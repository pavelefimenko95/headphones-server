import { Router } from 'express';
import { loadProducts, loadGalleries } from '../../../middlewares/database/load';

let router = Router();

router.get('/products', loadProducts);

router.get('/galleries', loadGalleries);

export default router;