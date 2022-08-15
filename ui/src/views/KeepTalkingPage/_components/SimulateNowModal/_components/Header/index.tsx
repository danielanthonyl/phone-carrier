import classes from './styles.module.scss';
import { Icon, Text } from '../../../../../../components';
import { IHeaderProps } from './types';

export const Header = ({ title, handleCloseClick }: IHeaderProps) => (
  <header className={classes.header}>
    <div onClick={handleCloseClick} className={classes.close}>
      <Icon name="Close" />
    </div>
    <Text className={classes.title} variant="callout" color="pureWhite">
      {title}
    </Text>
  </header>
);
