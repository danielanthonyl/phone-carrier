import { prisma } from '../../prisma';
import { DistanceDialingCostEntity } from '../domain/Entities/DistanceDialingCostEntity';

export class DistanceDialingCostRepository {
  static async createDistanceDialingCost(data: DistanceDialingCostEntity) {
    const newDistanceDialingCostData = await prisma.distanceDialingCost.create({ data });
    return newDistanceDialingCostData;
  }

  static async readDistanceDialingCost() {
    const readDistanceDialingCostList = await prisma.distanceDialingCost.findMany();
    return readDistanceDialingCostList;
  }
}
