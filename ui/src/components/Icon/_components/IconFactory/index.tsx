import { createElement } from 'react';
import { IconFactoryProps } from './types';

export const IconFactory = ({ svg, ...props }: IconFactoryProps) =>
  createElement(svg, { ...props });
