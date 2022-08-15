import { ChangeEvent } from 'react';
import { Option } from '../../../../../../components/Select/types';
import { IForm } from '../../../../../../store/KeepTalkingPage/SimulateNowModal/types';

export interface IFormProps {
  onInputChange(inputData: ChangeEvent<HTMLInputElement>, key: string): void;
  onOptionSelect(option: Option): void;
  formData: IForm;
}

export enum FormKeys {
  origin = 'origin',
  destiny = 'destiny',
  minutes = 'minutes',
  discount = 'discount',
}
