import { KeepTalkingPageIds } from '../../enums/TestIdLibrary';
import { CallToAction } from './_components/CallToAction';
import { Cards } from './_components/Cards';
import { SimulateNowModal } from './_components/SimulateNowModal';

import classes from './styles.module.scss';

export const KeepTalkingPage = () => (
  <section className={classes.keepTalkingSection}>
    <img
      data-testid={KeepTalkingPageIds.backgroundImage}
      className={classes.backgroundImage}
      alt="Background Image"
      src="/background-image.jpg"
    />
    <CallToAction />
    <Cards />
    <SimulateNowModal />
  </section>
);
