import { createElement } from 'react';
import { IconNamesMap, IconProps } from './types';
import * as icons from './_components';

export const Icon = ({ name, ...props }: IconProps) => {
  if (!IconNamesMap[name]) return <div></div>;

  return createElement(icons[name], props);
};
