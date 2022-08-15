import { SelectTestIds } from '../../../../enums/TestIdLibrary';
import { ISelectProps } from './types';
import classes from './styles.module.scss';
import { Text } from '../../../Text';
import { Icon } from '../../../Icon';

export const Select = ({ name, openDropdown, className }: ISelectProps) => (
  <div data-testid={SelectTestIds.select} onClick={openDropdown} className={`${classes.selectComponent} ${className}`}>
    <Text variant="subhead">{name}</Text>
    <Icon name="ArrowDown" />
  </div>
);
