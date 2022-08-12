import classes from './styles.module.scss';
import { Icon, Text } from '../../../../../../components';
import { IHeaderProps } from './types';

export const Header = ({ title }: IHeaderProps) => {
  return (
    <header className={classes.header}>
      {/* TODO: add abilitiy to close modal */}
      <div className={classes.close}>
        <Icon name="Close" />
      </div>
      <Text className={classes.title} variant="callout" color="pureWhite">
        {title}
      </Text>
    </header>
  );
};
