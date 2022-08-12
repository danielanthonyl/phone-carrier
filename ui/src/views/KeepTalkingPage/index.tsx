import { KeepTalkingPageIds } from '../../enums/TestIdLibrary';
import classes from './styles.module.scss';
import { CallToAction } from './_components/CallToAction';
import { Cards } from './_components/Cards';

export const KeepTalkingPage = () => (
  <section className={classes.keepTalkingSection}>
    <img
      data-testid={KeepTalkingPageIds.backgroundImage}
      className={classes.backgroundImage}
      alt="Background Image"
      src="/public/background-image.jpg"
    />

    <CallToAction />
    <Cards keepTalkingData={[]} />
  </section>
);
