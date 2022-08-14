import express from 'express';
import { readDistanceDialingCostController } from '../adapters/DialingDistanceCostControllers';

const distanceDialingCostRouter = express.Router();

distanceDialingCostRouter.get('/distance-dialing-cost', (request, response) =>
  readDistanceDialingCostController.handle(request, response),
);

export { distanceDialingCostRouter };
