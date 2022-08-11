import { Text } from '../../../Text';
import classes from './styles.module.scss';
import { IDropdownProps } from './types';

export const Dropdown = ({
  visible = false,
  renderContent = [],
}: IDropdownProps) =>
  visible ? (
    <div className={classes.dropdownComponent}>
      {renderContent.map(({ id, value }) => (
        <ul className={classes.optionsList} key={id}>
          <li className={classes.option}>
            <Text variant="subhead">{value}</Text>
          </li>
        </ul>
      ))}
    </div>
  ) : null;
