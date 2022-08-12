import { Text } from '../../../../components';
import classes from './styles.module.scss';
import { IResultContentProps } from './types';

export const ResultContent = ({
  discountData: {
    wasPrice,
    nowPrice,
    discountDifference,
    discountPerMinuteNow,
    discountPerMinuteWas,
  },
}: IResultContentProps) => (
  <div className={classes.resultContent}>
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
        <Text variant="subhead">Economia:</Text>
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
  </div>
);
