import { DistanceDialingCost } from '@prisma/client';
import { prisma } from '../../prisma';
import { DistanceDialingCostEntity } from '../domain/Entities/DistanceDialingCostEntity';

export interface IDistanceDialingCostRepository {
  createDistanceDialingCost(data: DistanceDialingCostEntity): Promise<DistanceDialingCost>;
  readDistanceDialingCost(): Promise<DistanceDialingCost[]>;
}

export const DistanceDialingCostRepository: IDistanceDialingCostRepository = class {
  static async createDistanceDialingCost(data: DistanceDialingCostEntity) {
    const newDistanceDialingCostData = await prisma.distanceDialingCost.create({ data });
    return newDistanceDialingCostData;
  }

  static async readDistanceDialingCost() {
    const readDistanceDialingCostList = await prisma.distanceDialingCost.findMany();
    return readDistanceDialingCostList;
  }
};
