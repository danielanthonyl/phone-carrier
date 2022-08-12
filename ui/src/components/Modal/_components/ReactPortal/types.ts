import { ReactNode } from 'react';
import { ReactPortalId } from '../../../../enums/ReactPortalId';

export interface IReactPortalProps {
  children: ReactNode;
  nodeId: ReactPortalId;
}
