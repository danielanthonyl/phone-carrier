import { v4 as uuidv4 } from 'uuid';
import { DistanceDialingCostRepository } from '../../src/dataAccess/DistanceDialingCostRepository';
import { DistanceDialingCostEntity } from '../../src/domain/Entities/DistanceDialingCostEntity';

const distanceDialingCostMap: DistanceDialingCostEntity[] = [
  { id: uuidv4(), origin: '011', destiny: '016', cost: 1.9 },
  { id: uuidv4(), origin: '016', destiny: '011', cost: 2.9 },
  { id: uuidv4(), origin: '011', destiny: '017', cost: 1.7 },
  { id: uuidv4(), origin: '017', destiny: '011', cost: 2.7 },
  { id: uuidv4(), origin: '011', destiny: '018', cost: 0.9 },
  { id: uuidv4(), origin: '018', destiny: '011', cost: 1.9 },
];

export const distanceDialingCostSeed = async () => {
  const distanceDialingCostList = await DistanceDialingCostRepository.readDistanceDialingCost();

  let dialogCostExists = false;

  distanceDialingCostMap.forEach((dialogCostMapItem) => {
    dialogCostExists = !!distanceDialingCostList.filter(
      (dialogCostListItem) =>
        dialogCostMapItem.origin === dialogCostListItem.origin &&
        dialogCostMapItem.destiny === dialogCostListItem.destiny,
    ).length;
  });

  if (dialogCostExists) throw new Error('Double Unique Constraint failed. Origin and Destiny must be unique.');

  distanceDialingCostMap.forEach(async (dialingCost) => {
    const newDialogCost = new DistanceDialingCostEntity(dialingCost);

    await DistanceDialingCostRepository.createDistanceDialingCost(newDialogCost);
  });
};
