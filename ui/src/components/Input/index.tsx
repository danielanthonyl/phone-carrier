import { ChangeEvent, FocusEvent, useState } from 'react';
import { IInputProps } from './types';
import classes from './styles.module.scss';
import { InputTestIds } from '../../enums/TestIdLibrary';

export const Input = ({ placeholder, ...props }: IInputProps) => {
  const [value, setValue] = useState('');
  const [labelAnimatedClass, setLabelAnimatedClass] = useState('');

  const onFocus = (event: FocusEvent<HTMLInputElement, Element>) => {
    props.onFocus && props.onFocus(event);
    setLabelAnimatedClass(classes.inputLabelAnimateUp);
  };

  const onBlur = (event: FocusEvent<HTMLInputElement, Element>) => {
    const isInputValueEmpty = value.length < 1;
    props.onBlur && props.onBlur(event);

    isInputValueEmpty && setLabelAnimatedClass(classes.inputLabelAnimateDown);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange && props.onChange(event);
    setValue(event.target.value);
  };

  return (
    <div className={classes.inputContainer}>
      <label
        data-testid={InputTestIds.label}
        className={`${classes.inputLabel} ${labelAnimatedClass}`}
        htmlFor="inputComponent"
      >
        {placeholder}
      </label>

      <input
        {...props}
        data-testid={InputTestIds.input}
        name="inputComponent"
        onChange={onChange}
        onBlur={onBlur}
        className={`${classes.inputComponent} ${props.className}`}
        {...{ onFocus }}
      />
    </div>
  );
};
