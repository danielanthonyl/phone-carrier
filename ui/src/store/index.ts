import { configureStore } from '@reduxjs/toolkit';
import { simulateNowModal } from './KeepTalkingPage/SimulateNowModal/index';
import { ISimulateNowModalState } from './KeepTalkingPage/SimulateNowModal/types';

export interface IStore {
  simulateNowModal: ISimulateNowModalState;
}

export const store = configureStore({
  reducer: {
    simulateNowModal,
  },
});
