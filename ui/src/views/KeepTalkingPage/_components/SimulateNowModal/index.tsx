import { useSelector } from 'react-redux';
import { Modal } from '../../../../components/Modal';
import classes from './styles.module.scss';
import { Header } from './_components/Header';
import { Form } from './_components/Form';
import { ResultContent } from '../ResultContent';
import { Button } from '../../../../components';
import { IStore } from '../../../../store';

export const SimulateNowModal = () => {
  // hide overflow of body func ...
  const {
    controls: { visible },
    discountData,
  } = useSelector(({ simulateNowModal }: IStore) => simulateNowModal);

  const shouldRenderResultContent = Object.keys(discountData).every(
    (key) => discountData[key as keyof typeof discountData] > 0,
  );

  return (
    <Modal {...{ visible }}>
      <div className={classes.modal}>
        <Header title="Desconto Fale Mais" />
        <main className={classes.mainContent}>
          <Form />
          {shouldRenderResultContent && <ResultContent {...{ discountData }} />}
          <Button title="Assinar" />
        </main>
      </div>
    </Modal>
  );
};
