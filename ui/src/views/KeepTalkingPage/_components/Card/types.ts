export type KeepTalkingIconNames =
  | 'KeepTalkingThirty'
  | 'KeepTalkingSixty'
  | 'KeepTalkingAHundredTwenty';

export interface IDiscountData {
  wasPrice: number;
  nowPrice: number;
  discountPerMinuteWas: number;
  discountPerMinuteNow: number;
  discountDifference: number;
}

export interface ICardProps {
  discountData: IDiscountData;
  iconName: KeepTalkingIconNames;
}
