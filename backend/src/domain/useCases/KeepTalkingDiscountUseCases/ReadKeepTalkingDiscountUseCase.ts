import { IKeepTalkingDiscountRepository } from '../../../dataAccess/KeepTalkingDiscountRepository';
import { KeepTalkingDiscountEntity } from '../../Entities/KeepTalkingDiscountEntity';

export interface IReadKeepTalkingDiscountUseCase {
  execute(): Promise<KeepTalkingDiscountEntity[]>;
}

export class ReadKeepTalkingDiscountUseCase implements IReadKeepTalkingDiscountUseCase {
  constructor(private keepTalkingDiscountRepository: IKeepTalkingDiscountRepository) {
    this.keepTalkingDiscountRepository = keepTalkingDiscountRepository;
  }

  async execute() {
    const discountList = await this.keepTalkingDiscountRepository.readDiscount();

    return discountList;
  }
}
