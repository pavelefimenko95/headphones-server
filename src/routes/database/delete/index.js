import { Router } from 'express';
import { deleteProduct } from '../../../middlewares/database/delete';

let router = Router();

router.delete('/product', deleteProduct);

export default router;