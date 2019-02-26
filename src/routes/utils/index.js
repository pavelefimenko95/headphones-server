import { Router } from 'express';
import { loadCities, loadPostOffices } from '../../middlewares/utils';

let router = Router();

router.get('/load-cities', loadCities);

router.get('/load-post-offices', loadPostOffices);

export default router;