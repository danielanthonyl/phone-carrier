import { createElement } from 'react';
import { ITextProps, VariantToNodeMap } from './types';

import classes from './styles.module.scss';

export const Text = <Node,>({
  variant = 'body',
  color = 'black',
  weight = 'regular',
  ...rest
}: ITextProps<Node>) =>
  createElement(VariantToNodeMap[variant], {
    className: `${classes[variant]} ${classes[color]} ${classes[weight]}`,

    ...rest,
  });
