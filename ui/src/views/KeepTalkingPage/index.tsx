import { KeepTalkingPageIds } from '../../enums/TestIdLibrary';
import classes from './styles.module.scss';
import { CallToAction } from './_components/CallToAction';
import { Cards } from './_components/Cards';
import { keepTalkingData } from './_components/Cards/__mocks__/keepTalkingData';
import { IDiscountData } from './_components/ResultContent/types';
import { SimulateNowModal } from './_components/SimulateNowModal';

const renderContent = [
  {
    id: '1',
    value: 'first',
  },
];

const discountData: IDiscountData = {
  discountDifference: 3,
  discountPerMinuteNow: 2,
  discountPerMinuteWas: 3,
  nowPrice: 3,
  wasPrice: 1,
};

export const KeepTalkingPage = () => (
  <section className={classes.keepTalkingSection}>
    <img
      data-testid={KeepTalkingPageIds.backgroundImage}
      className={classes.backgroundImage}
      alt="Background Image"
      src="/background-image.jpg"
    />

    <CallToAction />
    <Cards keepTalkingData={keepTalkingData} />
    <SimulateNowModal
      {...{ discountData, renderContent }}
      title="Desconto Fale Mais"
      visible
    />
  </section>
);
