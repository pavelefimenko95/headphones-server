import { Router } from 'express';
import { loadOrders, loadIpInfos } from '../../middlewares/info';

let router = Router();

router.get('/orders', loadOrders);

router.get('/ips', loadIpInfos);

export default router;