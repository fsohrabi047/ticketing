import express, { Request, Response } from 'express';
import { Order } from '../models/order';
import { body } from 'express-validator';
import mongoose from 'mongoose';
import { requireAuth, validateRequest } from '@far_ticketing/common';

const router = express.Router();

router.post(
  '/api/orders',
  requireAuth,
  [
    body('ticketId')
      .not()
      .isEmpty()
      .custom((input: string) => mongoose.Types.ObjectId.isValid(input))
      .withMessage('TicketId must be provided'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
  res.send({});
});

export { router as newOrderRouter };
