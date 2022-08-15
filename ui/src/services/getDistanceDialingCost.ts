import { AxiosError } from 'axios';
import { instance } from '.';

export interface IGetDistanceDialingCostData {
  costWithoutDiscount: number;
  costWithDiscount: number;
  costPerMinuteWithoutDiscount: number;
  costPerMinuteWithDiscount: number;
  costDifference: number;
  id: string;
  origin: string;
  destiny: string;
}

export interface IGetDistanceDialingCostResponse {
  status: number | undefined;
  data: IGetDistanceDialingCostData | unknown;
}

export interface IGetDistanceDialingCostArgs {
  origin: string;
  destiny: string;
  minutes: string | number;
  discountId: string;
}

export const getDistanceDialingCost = async ({
  origin,
  destiny,
  minutes,
  discountId,
}: IGetDistanceDialingCostArgs): Promise<IGetDistanceDialingCostResponse> => {
  try {
    const res = await instance.get(
      `/distance-dialing-cost?origin=${origin}&destiny=${destiny}&minutes=${minutes}&discountId=${discountId}`,
    );

    return {
      status: res.status,
      data: res.data.response,
    };
  } catch (error) {
    const { response } = error as AxiosError;
    return {
      status: response?.status,
      data: response?.data,
    };
  }
};
