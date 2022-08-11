import { FunctionComponent, ReactNode } from 'react';

export interface IconFactoryProps {
  svg: FunctionComponent<{ children?: ReactNode }>;
}
