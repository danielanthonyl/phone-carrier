import { ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../../../components/Modal';
import { Header } from './_components/Header';
import { Form } from './_components/Form';
import { ResultContent } from '../ResultContent';
import { Button, Text } from '../../../../components';
import { IStore } from '../../../../store';
import { formInitialState } from './_components/Form/_helpers/formInitialState';
import { useAppDispatch } from '../../../../hooks/useAsyncDispatch';
import { Option } from '../../../../components/Select/types';
import { updateDiscountDataAsync } from '../../../../store/KeepTalkingPage/SimulateNowModal/actions';

import classes from './styles.module.scss';
import { clearDiscountData, setVisible } from '../../../../store/KeepTalkingPage/SimulateNowModal';

export const SimulateNowModal = () => {
  const [formData, setFormData] = useState(formInitialState);
  const dispatch = useAppDispatch();
  const {
    controls: { visible, error },
    discountData,
  } = useSelector(({ simulateNowModal }: IStore) => simulateNowModal);

  const shouldRenderResultContent = discountData.wasPrice > 1;

  const handleClick = () => {
    dispatch(updateDiscountDataAsync({ ...formData }));
  };

  const onInputChange = (inputData: ChangeEvent<HTMLInputElement>, key: string) => {
    setFormData({ ...formData, [key]: { value: inputData.target.value } });
  };

  const onOptionSelect = (option: Option) => {
    setFormData({ ...formData, discount: option });

    dispatch(updateDiscountDataAsync({ ...formData, discount: option }));
  };

  const handleCloseClick = () => {
    dispatch(setVisible({ visible: false }));
    dispatch(clearDiscountData());
    setFormData(formInitialState);
  };

  return (
    <Modal {...{ visible }}>
      <div className={classes.modal}>
        <Header {...{ handleCloseClick }} title="Desconto Fale Mais" />
        <main className={classes.mainContent}>
          <Form {...{ onInputChange, onOptionSelect, formData }} />
          {shouldRenderResultContent ? (
            <ResultContent {...{ discountData }} />
          ) : (
            error && (
              <Text variant="footnote" weight="bold" color="red">
                {error}
              </Text>
            )
          )}
          <Button title="Calcular" onClick={handleClick} />
        </main>
      </div>
    </Modal>
  );
};
