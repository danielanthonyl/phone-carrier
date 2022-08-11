import { Text } from '../../../Text';
import classes from './styles.module.scss';
import { IOptionProps } from './types';

export const Option = ({ id, value, onOptionSelect }: IOptionProps) => (
  <ul
    onClick={() => onOptionSelect && onOptionSelect({ id, value })}
    className={classes.optionsList}
  >
    <li className={classes.option}>
      <Text variant="subhead">{value}</Text>
    </li>
  </ul>
);
