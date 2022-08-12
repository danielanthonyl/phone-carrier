import { discountNameToIconNameMap } from '../../_helpers/discountNameMap';
import { Card } from '../Card';
import classes from './styles.module.scss';
import { ICardsProps } from './types';

export const Cards = ({ keepTalkingData = [] }: ICardsProps) => (
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
