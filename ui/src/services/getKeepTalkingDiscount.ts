import { AxiosError } from 'axios';
import { instance } from '.';

export interface IGetKeepTalkingDiscountResponseData {
  id: string;
  name: string;
  maxMinutes: number;
}

export interface IGetKeepTalkingDiscountResponse {
  status: number | undefined;
  data: IGetKeepTalkingDiscountResponseData[] | unknown;
}

export const getKeepTalkingDiscount = async (): Promise<IGetKeepTalkingDiscountResponse> => {
  try {
    const res = await instance.get('/keep-talking-discount');

    return {
      data: res.data.response,
      status: res.status,
    };
  } catch (error) {
    const { response } = error as AxiosError;
    return {
      status: response?.status,
      data: response?.data,
    };
  }
};
