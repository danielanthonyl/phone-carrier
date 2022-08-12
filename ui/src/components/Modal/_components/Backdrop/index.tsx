import classes from './styles.module.scss';
import { IBackdropProps } from './types';

export const Backdrop = ({ children }: IBackdropProps) => {
  return <div className={classes.backdrop}>{children}</div>;
};
