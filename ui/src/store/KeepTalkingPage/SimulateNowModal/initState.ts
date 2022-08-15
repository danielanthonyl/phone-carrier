import { ISimulateNowModalState } from './types';

export const initialState: ISimulateNowModalState = {
  discountData: {
    discountDifference: 0,
    discountPerMinuteNow: 0,
    discountPerMinuteWas: 0,
    nowPrice: 0,
    wasPrice: 0,
  },
  controls: {
    visible: false,
    error: null,
    loading: false,
  },
};
