import { Text } from '../../../Text';
import classes from './styles.module.scss';

export const Header = () => (
  <header className={classes.header}>
    <Text weight="bold" variant="headline" color="pureWhite">
      Telzir
    </Text>
    <Text variant="subhead" color="pureWhite">
      Contato
    </Text>
  </header>
);
