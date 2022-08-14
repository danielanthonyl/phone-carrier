import express from 'express';
import { readKeepTalkingDiscountController } from '../adapters/KeepTalkingDiscountControllers';

const keepTalkingDiscountRouter = express.Router();

keepTalkingDiscountRouter.get('/keep-talking-discount', (request, response) =>
  readKeepTalkingDiscountController.handle(request, response),
);

export { keepTalkingDiscountRouter };
