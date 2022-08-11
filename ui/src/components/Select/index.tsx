import { useRef, useState } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import classes from './styles.module.scss';
import { ISelectProps, Option } from './types';
import { Select as DisplaySelect, Dropdown } from './_components';

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
      <DisplaySelect
        {...{ openDropdown, value }}
        className={shouldApplyFocusedClass}
      />
      <Dropdown
        {...{ visible, renderContent }}
        onOptionSelect={optionSelectHandler}
      />
    </div>
  );
};
