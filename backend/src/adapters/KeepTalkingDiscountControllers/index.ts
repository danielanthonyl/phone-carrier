import { KeepTalkingDiscountRepository } from '../../dataAccess/KeepTalkingDiscountRepository';
import { ReadKeepTalkingDiscountUseCase } from '../../domain/useCases/KeepTalkingDiscountUseCases/ReadKeepTalkingDiscountUseCase';
import { ReadKeepTalkingDiscountController } from './ReadKeepTalkingDiscountController';

const readKeepTalkingDiscountUseCase = new ReadKeepTalkingDiscountUseCase(KeepTalkingDiscountRepository);
const readKeepTalkingDiscountController = new ReadKeepTalkingDiscountController(readKeepTalkingDiscountUseCase);

export { readKeepTalkingDiscountController };
