import { prisma } from '../../prisma';
import { KeepTalkingDiscountEntity } from '../domain/Entities/KeepTalkingDiscountEntity';

export class KeepTalkingDiscountRepository {
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
}
