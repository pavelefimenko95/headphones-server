import { Router } from 'express';
import { loadProducts, loadGalleries, loadSoldProducts } from '../../../middlewares/database/load';

let router = Router();

router.get('/products', loadProducts);

router.get('/galleries', loadGalleries);

router.get('/sold-products', loadSoldProducts);

export default router;