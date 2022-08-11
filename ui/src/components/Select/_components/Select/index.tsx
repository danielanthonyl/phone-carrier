import { SelectTestIds } from '../../../../enums/TestIdLibrary';
import { ISelectProps } from './types';
import classes from './styles.module.scss';
import { Text } from '../../../Text';
import { Icon } from '../../../Icon';

export const Select = ({ value, openDropdown, className }: ISelectProps) => (
  <div
    data-testid={SelectTestIds.select}
    onClick={openDropdown}
    className={`${classes.selectComponent} ${className}`}
  >
    <Text variant="subhead">{value}</Text>
    <Icon name="ArrowDown" />
  </div>
);
