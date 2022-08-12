import { IDiscountData } from '../ResultContent/types';

export type KeepTalkingIconNames =
  | 'KeepTalkingThirty'
  | 'KeepTalkingSixty'
  | 'KeepTalkingAHundredTwenty';

export interface ICardProps {
  discountData: IDiscountData;
  iconName: KeepTalkingIconNames;
}
