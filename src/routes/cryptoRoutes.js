import express from 'express';
import { getCryptoStatsController, getCryptoDeviationController } from '../controllers/cryptoController.js';

const router = express.Router();

router.get('/stats', getCryptoStatsController);
router.get('/deviation', getCryptoDeviationController);

export default router;