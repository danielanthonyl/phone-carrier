import { v4 as uuidv4 } from 'uuid';

export class DistanceDialingCostEntity {
  public readonly id!: string;

  public origin!: string;

  public destiny!: string;

  public cost!: number;

  constructor(props: Omit<DistanceDialingCostEntity, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuidv4();
    }

    if (!this.origin) throw new Error('origin is required');
    if (!this.destiny) throw new Error('destiny is required');
    if (!this.cost) throw new Error('cost is required');
  }
}
