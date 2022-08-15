import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initState';
import { actions as reducers, updateDiscountData, updateDiscountDataAsync, updateDiscountDataReject } from './actions';

const simulateNowModalSlice = createSlice({
  name: 'simulate-modal',
  initialState,
  reducers,
  extraReducers(builder) {
    builder.addCase(updateDiscountDataAsync.fulfilled, updateDiscountData);
    builder.addCase(updateDiscountDataAsync.rejected, updateDiscountDataReject);
  },
});

export const simulateNowModal = simulateNowModalSlice.reducer;
export const { setVisible, clearDiscountData } = simulateNowModalSlice.actions;
