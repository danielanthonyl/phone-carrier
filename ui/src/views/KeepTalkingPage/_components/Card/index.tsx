import { Text } from '../../../../components';
import { Button } from '../../../../components/Button';
import { Icon } from '../../../../components/Icon';
import { KeepTalkingPageIds } from '../../../../enums/TestIdLibrary';
import { keepTalkingData } from '../Cards/__mocks__/keepTalkingData';
import { ResultContent } from '../ResultContent';
import classes from './styles.module.scss';
import { ICardProps } from './types';

export const Card = ({
  iconName,
  discountData: {
    wasPrice,
    nowPrice,
    discountDifference,
    discountPerMinuteWas,
    discountPerMinuteNow,
  },
}: ICardProps) => (
  <article data-testid={KeepTalkingPageIds.card} className={classes.card}>
    <header className={classes.cardHeader}>
      <Icon name={iconName} />
    </header>

    <main className={classes.cardMainContent}>
      <ResultContent discountData={keepTalkingData[0].discountData} />

      <Button className={classes.assignButton} title="Assinar" />
      <Text className={classes.caption} color="grey" variant="caption">
        Simulação baseada de DDD 21 para DDD 11.
      </Text>
    </main>
  </article>
);
