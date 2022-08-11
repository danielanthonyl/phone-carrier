import { Option } from '../Option';
import classes from './styles.module.scss';
import { IDropdownProps } from './types';

export const Dropdown = ({
  visible = false,
  renderContent = [],
  onOptionSelect,
}: IDropdownProps) =>
  visible ? (
    <div className={classes.dropdownComponent}>
      {renderContent.map((props) => (
        <Option onOptionSelect={onOptionSelect} key={props.id} {...props} />
      ))}
    </div>
  ) : null;
