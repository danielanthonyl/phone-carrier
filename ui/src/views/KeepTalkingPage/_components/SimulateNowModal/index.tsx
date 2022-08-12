import { Modal } from '../../../../components/Modal';
import { ISimulateNowModalProps } from './types';
import classes from './styles.module.scss';
import { Header } from './_components/Header';
import { Form } from './_components/Form';
import { ResultContent } from '../ResultContent';
import { keepTalkingData } from '../Cards/__mocks__/keepTalkingData';
import { Button } from '../../../../components';

export const SimulateNowModal = ({
  visible = false,
  title,
  renderContent,
  discountData,
}: ISimulateNowModalProps) => {
  // hide overflow of body func ...
  return (
    <Modal {...{ visible }}>
      <div className={classes.modal}>
        <Header {...{ title }} />
        <main className={classes.mainContent}>
          <Form {...{ renderContent }} />
          <ResultContent {...{ discountData }} />
          <Button title="Assinar" />
        </main>
      </div>
    </Modal>
  );
};
