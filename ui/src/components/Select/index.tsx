import { useRef, useState } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import { Text } from '../Text';
import classes from './styles.module.scss';
import { ISelectProps, Option } from './types';
import { Dropdown } from './_components/Dropdown';

export const Select = ({ renderContent, onOptionSelect }: ISelectProps) => {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const clickOutside = useClickOutside(containerRef);
  const [{ value }, setSelectedOption] = useState(renderContent[0]);
  const shouldApplyFocusedClass = visible && classes.selectComponentFocused;

  const openDropdown = () => {
    setVisible(!visible);
  };

  const optionSelectHandler = (option: Option) => {
    onOptionSelect && onOptionSelect(option);
    setSelectedOption(option);
    setVisible(false);
  };

  clickOutside(setVisible, false);

  return (
    <div ref={containerRef} className={classes.selectContainer}>
      <div
        onClick={openDropdown}
        className={`${classes.selectComponent} ${shouldApplyFocusedClass}`}
      >
        <Text variant="subhead">{value}</Text>
        {/* TODO: this will be replaced by a SVG icon */}
        <Text>⌄</Text>
      </div>

      <Dropdown
        {...{ visible, renderContent }}
        onOptionSelect={optionSelectHandler}
      />
    </div>
  );
};
