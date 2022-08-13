import { v4 as uuidv4 } from 'uuid';

export class KeepTalkingDiscountEntity {
  public id!: string;

  public name!: string;

  public maxMinutes!: number;

  constructor(props: Omit<KeepTalkingDiscountEntity, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuidv4();
    }

    if (!this.name) throw new Error('Name is required');
    if (!this.maxMinutes) throw new Error('Max minutes is required');
  }
}
