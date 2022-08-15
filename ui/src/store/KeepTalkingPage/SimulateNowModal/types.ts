import { PayloadAction } from '@reduxjs/toolkit';

export interface IUpdateDiscountErrorPayload {
  message: string;
}

export interface IDiscountData {
  discountDifference: number;
  discountPerMinuteNow: number;
  discountPerMinuteWas: number;
  nowPrice: number;
  wasPrice: number;
}

export interface IForm {
  destiny: {
    value: string;
  };
  minutes: {
    value: string;
  };
  origin: {
    value: string;
  };
  discount: {
    id: string;
    name: string;
  };
}

export interface ISetVisiblePayload {
  visible: boolean;
}

export type SetVisiblePayload = PayloadAction<ISetVisiblePayload>;

export interface ISimulateNowModalState {
  discountData: IDiscountData;
  controls: {
    visible: boolean;
    error: null | string;
    loading: boolean;
  };
}
