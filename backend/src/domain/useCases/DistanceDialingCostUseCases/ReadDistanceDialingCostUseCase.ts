import { IDistanceDialingCostRepository } from '../../../dataAccess/DistanceDialingCostRepository';
import { IKeepTalkingDiscountRepository } from '../../../dataAccess/KeepTalkingDiscountRepository';
import { IReadDistanceDialingCostDTO } from '../../DTOs/DistanceDialingCostDTO/IReadDistanceDialingCost';

export interface IReadDistanceDialingCostUseCaseReturn {
  costWithoutDiscount: number;
  costWithDiscount: number;
  costPerMinuteWithoutDiscount: number;
  costPerMinuteWithDiscount: number;
  costDifference: number;
  id: string;
  origin: string;
  destiny: string;
}

export interface IReadDistanceDialingCostUseCase {
  execute(data: IReadDistanceDialingCostDTO): Promise<IReadDistanceDialingCostUseCaseReturn>;
}

export class ReadDistanceDialingCostUseCase implements IReadDistanceDialingCostUseCase {
  constructor(
    private distanceDialingCostRepository: IDistanceDialingCostRepository,
    private keepTalkingDiscountRepository: IKeepTalkingDiscountRepository,
  ) {}

  async execute({
    origin,
    destiny,
    minutes,
    discountId,
  }: IReadDistanceDialingCostDTO): Promise<IReadDistanceDialingCostUseCaseReturn> {
    const distanceDialingCostList = await this.distanceDialingCostRepository.readDistanceDialingCost();

    const keepTalkingDiscountList = await this.keepTalkingDiscountRepository.readDiscount();

    const foundDiscount = keepTalkingDiscountList.find(({ id }) => id === discountId);
    if (!foundDiscount) throw new Error('Keep Talking Discount not found.');

    const foundDistanceDialingCost = distanceDialingCostList.find(
      (distanceDialingCostListItem) =>
        distanceDialingCostListItem.origin === origin && distanceDialingCostListItem.destiny === destiny,
    );

    if (!foundDistanceDialingCost) throw new Error('This combination of origin and destiny is not covered yet.');

    const { maxMinutes } = foundDiscount;
    const cost = Number(Number(foundDistanceDialingCost.cost).toFixed(2));

    const calculateDiscount = (minutes - maxMinutes) * (cost + cost * 0.1);

    const costWithoutDiscount = Number(Number(minutes * cost).toFixed(2));
    const costWithDiscount = calculateDiscount <= 0 ? 0 : Number(Number(calculateDiscount).toFixed(2));
    const costPerMinuteWithDiscount = Number(Number(costWithDiscount / minutes).toFixed(2));
    const costDifference = costWithoutDiscount - costWithDiscount;

    return {
      costWithoutDiscount,
      costWithDiscount,
      costPerMinuteWithoutDiscount: cost,
      costPerMinuteWithDiscount,
      costDifference,
      id: foundDistanceDialingCost.id,
      origin: foundDistanceDialingCost.origin,
      destiny: foundDistanceDialingCost.destiny,
    };
  }
}
