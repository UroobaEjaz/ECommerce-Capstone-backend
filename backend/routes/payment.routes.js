import express from 'express';
import { processPayment } from '../controllers/payment.controller.js';

const router = express.Router();

// POST request to process payment
router.post('/payment', processPayment);

export default router;