import { Text } from '../Text';
import classes from './styles.module.scss';
import { IButtonProps } from './types';

export const Button = ({
  variant = 'default',
  title,
  ...props
}: IButtonProps) => (
  <button
    {...props}
    className={`${classes.button} ${classes[variant]} ${props.className}`}
  >
    <Text variant="callout" color="pureWhite">
      {title}
    </Text>
  </button>
);
