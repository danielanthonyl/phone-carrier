import { IKeepTalkingDiscountRepository } from '../../../dataAccess/KeepTalkingDiscountRepository';
import { ICreateKeepTalkingDiscountDTO } from '../../DTOs/KeepTalkingDiscountDTO/ICreateKeepTalkingDiscountDTO';

export class KeepTalkingDiscountCreateUseCase {
  private keepTalkingDiscountRepository: IKeepTalkingDiscountRepository;

  constructor(keepTalkingDiscountRepository: IKeepTalkingDiscountRepository) {
    this.keepTalkingDiscountRepository = keepTalkingDiscountRepository;
  }

  execute(data: ICreateKeepTalkingDiscountDTO) {
    this.keepTalkingDiscountRepository.createDiscount(data);
  }
}
