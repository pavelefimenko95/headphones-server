import { Router } from 'express';
import { updateProduct } from '../../../middlewares/database/update';

let router = Router();

router.put('/product', updateProduct);

export default router;