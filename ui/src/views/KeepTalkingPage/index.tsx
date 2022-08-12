import { KeepTalkingPageIds } from '../../enums/TestIdLibrary';
import classes from './styles.module.scss';
import { CallToAction } from './_components/CallToAction';
import { Cards } from './_components/Cards';
import { keepTalkingData } from './_components/Cards/__mocks__/keepTalkingData';

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
  </section>
);
