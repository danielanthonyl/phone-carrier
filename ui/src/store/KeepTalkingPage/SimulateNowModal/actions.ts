/* eslint-disable no-param-reassign */
import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './initState';
import { ISimulateNowModalState, SetVisiblePayload, IForm, IDiscountData } from './types';

export const setVisible = (state: ISimulateNowModalState, { payload: { visible } }: SetVisiblePayload) => {
  state.controls.visible = visible;
};

export const clearDiscountData = (state: ISimulateNowModalState) => {
  state.discountData = initialState.discountData;
};

export const updateDiscountData = (state: ISimulateNowModalState, action: PayloadAction<IDiscountData>) => {
  // TODO: update reducer with backend income data.
  state.discountData = action.payload;
};

export const updateDiscountDataAsync = createAsyncThunk('update-discount-data-async', async (payload: IForm) => {
  // TODO: pickup payload and pass to backend.
  payload;

  const fakeBackend = (): IDiscountData => ({
    discountDifference: 12,
    discountPerMinuteNow: 12,
    discountPerMinuteWas: 12,
    nowPrice: 12,
    wasPrice: 12,
  });

  return fakeBackend();
});

export const actions = {
  setVisible,
  clearDiscountData,
};
