import { useRef, useState } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import { Text } from '../Text';
import classes from './styles.module.scss';
import { ISelectProps } from './types';
import { Dropdown } from './_components/Dropdown';

export const Select = ({ renderContent }: ISelectProps) => {
  const selectedOption = 'test';
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const clickOutside = useClickOutside(containerRef);
  const shouldApplyFocusedClass = visible && classes.selectComponentFocused;

  const openDropdown = () => {
    setVisible(!visible);
  };

  clickOutside(setVisible, false);

  return (
    <div ref={containerRef} className={classes.selectContainer}>
      <div
        onClick={openDropdown}
        className={`${classes.selectComponent} ${shouldApplyFocusedClass}`}
      >
        <Text variant="subhead">{selectedOption}</Text>
        {/* TODO: this will be replaced by a SVG icon */}
        <Text>⌄</Text>
      </div>

      <Dropdown {...{ visible, renderContent }} />
    </div>
  );
};
