/* eslint-disable no-param-reassign */
import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getDistanceDialingCost, IGetDistanceDialingCostData } from '../../../services/getDistanceDialingCost';
import { initialState } from './initState';
import { ISimulateNowModalState, SetVisiblePayload, IForm, IDiscountData } from './types';

export const setVisible = (state: ISimulateNowModalState, { payload: { visible } }: SetVisiblePayload) => {
  state.controls = {
    error: null,
    loading: false,
    visible,
  };
};

export const clearDiscountData = (state: ISimulateNowModalState) => {
  state.discountData = initialState.discountData;
};

export const updateDiscountData = (state: ISimulateNowModalState, action: PayloadAction<IDiscountData>) => {
  // TODO: update reducer with backend income data.
  state.discountData = action.payload;
};

export const updateDiscountDataReject = (state: ISimulateNowModalState, action: PayloadAction<unknown>) => {
  // TODO: update reducer with backend income data.
  const { message } = action.payload as { message: string };

  state.controls = {
    ...state.controls,
    error: message,
    loading: false,
  };
};

export const updateDiscountDataAsync = createAsyncThunk(
  'update-discount-data-async',
  async ({ origin, destiny, minutes, discount }: IForm, { rejectWithValue }) => {
    const res = await getDistanceDialingCost({
      origin: origin.value,
      destiny: destiny.value,
      minutes: minutes.value,
      discountId: discount.id,
    });

    if (res.status !== 200) {
      return rejectWithValue({
        message: 'Ainda não temos cobertura para esta combinação de origem e destino.',
      });
    }

    const {
      costWithDiscount,
      costDifference,
      costWithoutDiscount,
      costPerMinuteWithDiscount,
      costPerMinuteWithoutDiscount,
    } = res.data as IGetDistanceDialingCostData;

    return {
      discountDifference: costDifference,
      discountPerMinuteNow: costPerMinuteWithDiscount,
      discountPerMinuteWas: costPerMinuteWithoutDiscount,
      nowPrice: costWithDiscount,
      wasPrice: costWithoutDiscount,
    };
  },
);

export const actions = {
  setVisible,
  clearDiscountData,
};
