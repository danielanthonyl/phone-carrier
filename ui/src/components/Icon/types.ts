export type IconNames =
  | 'KeepTalkingThirty'
  | 'KeepTalkingSixty'
  | 'KeepTalkingAHundredTwenty'
  | 'ArrowDown'
  | 'Close';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconNames;
}

export enum IconNamesMap {
  ArrowDown = 'ArrowDown',
  KeepTalkingThirty = 'KeepTalkingThirty',
  KeepTalkingSixty = 'KeepTalkingSixty',
  KeepTalkingAHundredTwenty = 'KeepTalkingAHundredTwenty',
  Close = 'Close',
}
