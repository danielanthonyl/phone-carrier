export type TextVariantLibrary =
  | 'caption'
  | 'footnote'
  | 'subhead'
  | 'callout'
  | 'body'
  | 'headline'
  | 'largeTitle';

export enum VariantToNodeMap {
  caption = 'p',
  footnote = 'p',
  subhead = 'p',
  callout = 'p',
  body = 'h6',
  headline = 'h4',
  largeTitle = 'h3',
}

export type ColorLibrary = 'red' | 'green' | 'white' | 'grey' | 'black';

export enum ColorMap {
  red = 'red',
  green = 'green',
  white = 'white',
  grey = 'grey',
  black = 'black',
}

type FontWeight = 'regular' | 'bold';

export interface ITextProps<T> extends React.HTMLAttributes<T> {
  variant?: TextVariantLibrary;
  color?: ColorLibrary;
  weight?: FontWeight;
}
