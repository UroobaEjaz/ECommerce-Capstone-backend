import express from 'express';
import { createPaymentIntent } from '../controllers/payment.controller.js';
import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config();
const express = require('express');
const stripe = require('stripe')(YOUR_SECRET_KEY); // Replace with your actual Stripe secret key
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Define your routes here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});