import { prisma } from '../../prisma';
import { KeepTalkingDiscountEntity } from '../domain/Entities/KeepTalkingDiscountEntity';

export interface IKeepTalkingDiscountRepository {
  createDiscount(data: KeepTalkingDiscountEntity): Promise<KeepTalkingDiscountEntity>;
  readDiscount(): Promise<KeepTalkingDiscountEntity[]>;
}

export const KeepTalkingDiscountRepository: IKeepTalkingDiscountRepository = class {
  static async createDiscount(data: KeepTalkingDiscountEntity) {
    const createdData = await prisma.keepTalkingDiscount.create({
      data,
    });

    return createdData;
  }

  static async readDiscount() {
    const discountList = await prisma.keepTalkingDiscount.findMany();

    return discountList;
  }
};
