import { createElement } from 'react';
import { ITextProps, VariantToNodeMap } from './types';

import classes from './styles.module.scss';
import { TextTestIds } from '../../enums/TestIdLibrary';

export const Text = <Node,>({
  variant = 'body',
  color = 'black',
  weight = 'regular',
  ...rest
}: ITextProps<Node>) =>
  createElement(VariantToNodeMap[variant], {
    ...rest,
    'data-testid': TextTestIds.text,
    className: `${classes[variant]} ${classes[color]} ${classes[weight]} ${rest.className}`,
  });
