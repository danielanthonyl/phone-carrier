import { Option } from '../../../../components/Select/types';
import { IDiscountData } from '../ResultContent/types';

export interface ISimulateNowModalProps {
  visible: boolean;
  title: string;
  renderContent: Option[];
  discountData: IDiscountData;
}
