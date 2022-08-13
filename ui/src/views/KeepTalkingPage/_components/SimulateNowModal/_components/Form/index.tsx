import { ChangeEvent, useState } from 'react';
import { Input, Select } from '../../../../../../components';
import { Option } from '../../../../../../components/Select/types';
import { FormKeys } from './types';

import classes from './styles.module.scss';
import { updateDiscountDataAsync } from '../../../../../../store/KeepTalkingPage/SimulateNowModal/actions';
import { useAppDispatch } from '../../../../../../hooks/useAsyncDispatch';

export const Form = () => {
  const dispatch = useAppDispatch();

  const [localForm, setLocalForm] = useState({
    destiny: {
      value: '',
    },
    minutes: {
      value: '',
    },
    origin: {
      value: '',
    },
    discount: {
      id: '',
      value: '',
    },
  });

  const onInputChange = (inputData: ChangeEvent<HTMLInputElement>, key: string) => {
    setLocalForm({ ...localForm, [key]: { value: inputData.target.value } });
  };

  const onOptionSelect = (option: Option) => {
    setLocalForm({ ...localForm, discount: option });

    dispatch(updateDiscountDataAsync({ ...localForm, discount: option }));
  };

  // get promotion details and passdown to renderContent
  const renderContent = [
    {
      id: '1',
      value: 'first',
    },
  ];

  // useEffect to push rendercontent value to redux so it displays on Select

  return (
    <form className={classes.form}>
      <div className={classes.inputs}>
        <Input
          value={localForm.origin.value}
          onChange={(event) => onInputChange(event, FormKeys.origin)}
          placeholder="Origem"
        />
        <Input
          value={localForm.destiny.value}
          onChange={(event) => onInputChange(event, FormKeys.destiny)}
          placeholder="Destino"
        />
      </div>

      <div className={classes.inputs}>
        <Input
          value={localForm.minutes.value}
          onChange={(event) => onInputChange(event, FormKeys.minutes)}
          placeholder="Tempo"
        />
        <Select {...{ renderContent, onOptionSelect }} />
      </div>
    </form>
  );
};
