import { useDispatch } from 'react-redux';
import classes from './styles.module.scss';
import { Icon, Text } from '../../../../../../components';
import { IHeaderProps } from './types';
import { clearDiscountData, setVisible } from '../../../../../../store/KeepTalkingPage/SimulateNowModal';

export const Header = ({ title }: IHeaderProps) => {
  const dispatch = useDispatch();

  const handleCloseClick = () => {
    dispatch(setVisible({ visible: false }));
    dispatch(clearDiscountData());
  };

  return (
    <header className={classes.header}>
      {/* TODO: add abilitiy to close modal */}
      <div onClick={handleCloseClick} className={classes.close}>
        <Icon name="Close" />
      </div>
      <Text className={classes.title} variant="callout" color="pureWhite">
        {title}
      </Text>
    </header>
  );
};
