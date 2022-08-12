import { IDiscountData } from '../Card/types';

export interface IKeepTalkingData {
  discountData: IDiscountData;
  discountName: string;
  discountId: string;
}

export interface ICardsProps {
  keepTalkingData: IKeepTalkingData[];
}
