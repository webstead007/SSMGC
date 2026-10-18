import { Router } from 'express';
import { getService, getServices } from '../controllers/serviceController.js';

const router = Router();
router.get('/', getServices);
router.get('/:slug', getService);
export default router;
