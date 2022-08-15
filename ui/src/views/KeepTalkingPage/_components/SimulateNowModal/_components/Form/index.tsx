import { useEffect, useState } from 'react';
import { Input, Select } from '../../../../../../components';
import { FormKeys, IFormProps } from './types';
import {
  getKeepTalkingDiscount,
  IGetKeepTalkingDiscountResponseData,
} from '../../../../../../services/getKeepTalkingDiscount';

import classes from './styles.module.scss';
import { normalizeDiscountName } from '../../../../_helpers/discountNameMap';

export const Form = ({ onInputChange, onOptionSelect, formData }: IFormProps) => {
  const [renderContent, setRenderContent] = useState<IGetKeepTalkingDiscountResponseData[]>([]);

  // TODO: move this logic to redux
  useEffect(() => {
    (async () => {
      const res = await getKeepTalkingDiscount();

      if (res.status !== 200) {
        // TODO: add error handling.
        return;
      }

      const { data } = res as { data: IGetKeepTalkingDiscountResponseData[] };

      const treatedDiscount = data.map((discount) => ({
        ...discount,
        name: normalizeDiscountName(discount.name),
      }));

      setRenderContent(treatedDiscount);
    })();
  }, []);

  return (
    <form className={classes.form}>
      <div className={classes.inputs}>
        <Input
          value={formData.origin.value}
          onChange={(event) => onInputChange(event, FormKeys.origin)}
          placeholder="Origem"
        />
        <Input
          value={formData.destiny.value}
          onChange={(event) => onInputChange(event, FormKeys.destiny)}
          placeholder="Destino"
        />
      </div>

      <div className={classes.inputs}>
        <Input
          value={formData.minutes.value}
          onChange={(event) => onInputChange(event, FormKeys.minutes)}
          placeholder="Tempo"
        />
        <Select {...{ renderContent, onOptionSelect }} />
      </div>
    </form>
  );
};
