import { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { Input, Select } from '../../../../../../components';
import { Option } from '../../../../../../components/Select/types';
import classes from './styles.module.scss';
import { IFormProps } from './types';

export const Form = ({ renderContent }: IFormProps) => {
  // TODO: integrate redux

  const onInputChange = (
    inputData: ChangeEvent<HTMLInputElement> | Option,
  ) => {};

  return (
    <form className={classes.form}>
      <div className={classes.inputs}>
        <Input onChange={onInputChange} placeholder="Origem" />
        <Input onChange={onInputChange} placeholder="Destino" />
      </div>

      <div className={classes.inputs}>
        <Input onChange={onInputChange} placeholder="Tempo" />
        <Select onOptionSelect={onInputChange} {...{ renderContent }} />
      </div>
    </form>
  );
};
