import { Text } from '../Text';
import styles from './styles.module.scss';
import { IButtonProps } from './types';

export const Button = ({ variant = 'default', title }: IButtonProps) => (
  <button className={`${styles.button} ${styles[variant]}`}>
    <Text variant="callout" color="pureWhite">
      {title}
    </Text>
  </button>
);