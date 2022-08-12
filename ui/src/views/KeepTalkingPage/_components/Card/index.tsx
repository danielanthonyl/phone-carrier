import { Text } from '../../../../components';
import { Button } from '../../../../components/Button';
import { Icon } from '../../../../components/Icon';
import { KeepTalkingPageIds } from '../../../../enums/TestIdLibrary';
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
      <div className={classes.wasNowPrice}>
        <div className={classes.column}>
          <Text variant="callout">De:</Text>
          <Text>Por:</Text>
        </div>

        <div className={classes.column}>
          <Text className={classes.wasPriceText} color="grey">
            R$ {wasPrice}
          </Text>
          <Text weight="bold">R$: {nowPrice}</Text>
        </div>
      </div>

      <hr className={classes.thematicBreak} />

      <div className={classes.additionalInformations}>
        <div className={classes.column}>
          <Text variant="subhead">Econima:</Text>
          <Text variant="subhead">Valor por minuto:</Text>
        </div>

        <div className={classes.column}>
          <Text
            className={classes.discountDifference}
            weight="bold"
            variant="subhead"
          >
            R$ {discountDifference}
          </Text>
          <div className={classes.discountPerMinutes}>
            <Text
              color="grey"
              className={classes.wasPriceText}
              variant="footnote"
            >
              R$ {discountPerMinuteWas}
            </Text>
            <Text weight="bold" variant="subhead">
              R$ {discountPerMinuteNow}
            </Text>
          </div>
        </div>
      </div>

      <Button title="Assinar" />
      <Text className={classes.caption} color="grey" variant="caption">
        Simulação baseada de DDD 21 para DDD 11.
      </Text>
    </main>
  </article>
);
