import { KeepTalkingDiscountRepository } from '../../src/dataAccess/KeepTalkingDiscountRepository';
import { KeepTalkingDiscountEntity } from '../../src/domain/Entities/KeepTalkingDiscountEntity';

export const keepTalkingDiscountSeed = async () => {
  const keepTalkingThirty = new KeepTalkingDiscountEntity({
    name: 'KEEP_TALKING_30',
    maxMinutes: 30,
  });

  const keepTalkingSixty = new KeepTalkingDiscountEntity({
    name: 'KEEP_TALKING_60',
    maxMinutes: 60,
  });

  const keepTalkingAHundredTwenty = new KeepTalkingDiscountEntity({
    name: 'KEEP_TALKING_120',
    maxMinutes: 120,
  });

  [keepTalkingThirty, keepTalkingSixty, keepTalkingAHundredTwenty].forEach(async (keepTalkingData) => {
    await KeepTalkingDiscountRepository.createDiscount(keepTalkingData);
  });
};
