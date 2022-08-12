import { Text } from '../../../../components';
import { Button } from '../../../../components/Button';
import { KeepTalkingPageIds } from '../../../../enums/TestIdLibrary';
import classes from './styles.module.scss';

export const CallToAction = () => (
  <div
    data-testid={KeepTalkingPageIds.callToAction}
    className={classes.callToAction}
  >
    <Text className={classes.headline} variant="headline" color="pureWhite">
      Fale Mais
    </Text>
    <Text className={classes.subhead} variant="subhead" color="pureWhite">
      Faça ligações interubabas com muito mais conforto com os planos Fale Mais.
      Escolha opções que mais se adeque às suas necessidades sem gastar a mais
      por isso.
    </Text>
    <Button
      className={classes.actionButton}
      variant="outline"
      title="Faça uma simulação agora."
    />
  </div>
);
