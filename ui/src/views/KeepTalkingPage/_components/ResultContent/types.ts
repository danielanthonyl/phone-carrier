export interface IDiscountData {
  wasPrice: number;
  nowPrice: number;
  discountPerMinuteWas: number;
  discountPerMinuteNow: number;
  discountDifference: number;
}

export interface IResultContentProps {
  discountData: IDiscountData;
}
