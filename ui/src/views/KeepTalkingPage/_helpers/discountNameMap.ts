import { KeepTalkingIconNames } from '../_components/Card/types';

export const discountNameToIconNameMap = (
  discountName: string,
): KeepTalkingIconNames => {
  switch (discountName) {
    case 'KEEP_TALKING_30':
      return 'KeepTalkingThirty';
    case 'KEEP_TALKING_60':
      return 'KeepTalkingSixty';
    case 'KEEP_TALKING_120':
      return 'KeepTalkingAHundredTwenty';
    default:
      return 'KeepTalkingThirty';
  }
};
