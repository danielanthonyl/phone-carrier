import { Option } from '../../types';

export interface IOptionProps extends Option {
  onOptionSelect?(id: Option): void;
}
