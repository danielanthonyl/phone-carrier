import { discountNameToIconNameMap } from '../../_helpers/discountNameMap';
import { Card } from '../Card';
import classes from './styles.module.scss';
import { keepTalkingData } from './_helpers/keepTalkingData';

export const Cards = () => (
  <div className={classes.cards}>
    {keepTalkingData.map(({ discountData, discountId, discountName }) => (
      <Card
        key={discountId}
        {...{ discountData }}
        iconName={discountNameToIconNameMap(discountName)}
      />
    ))}
  </div>
);
