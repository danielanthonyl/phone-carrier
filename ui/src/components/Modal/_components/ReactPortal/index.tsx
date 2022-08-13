import { useState, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import { ReactPortalId } from '../../../../enums/ReactPortalId';
import { IReactPortalProps } from './types';

const createWrapperAndAppendToBody = (nodeId: string) => {
  const nodeElement = document.createElement('div');
  nodeElement.setAttribute('id', nodeId);
  document.body.appendChild(nodeElement);
  return nodeElement;
};

export const ReactPortal = ({
  children,
  nodeId = ReactPortalId.nodeId,
}: IReactPortalProps) => {
  const [nodeElement, setNodeElement] = useState<Element | null>(null);

  useLayoutEffect(() => {
    let element = document.getElementById(nodeId);
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(nodeId);
    }

    setNodeElement(element);

    return () => {
      if (systemCreated && element && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [nodeId]);

  if (!nodeElement) return null;

  return createPortal(children, nodeElement);
};
