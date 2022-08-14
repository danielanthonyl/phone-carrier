import { DistanceDialingCostRepository } from '../../dataAccess/DistanceDialingCostRepository';
import { KeepTalkingDiscountRepository } from '../../dataAccess/KeepTalkingDiscountRepository';
import { ReadDistanceDialingCostUseCase } from '../../domain/useCases/DistanceDialingCostUseCases/ReadDistanceDialingCostUseCase';
import { ReadDistanceDialingCostController } from './ReadDialingDistanceCostController';

const readDistanceDialingCostUseCase = new ReadDistanceDialingCostUseCase(
  DistanceDialingCostRepository,
  KeepTalkingDiscountRepository,
);

const readDistanceDialingCostController = new ReadDistanceDialingCostController(readDistanceDialingCostUseCase);

export { readDistanceDialingCostController };
