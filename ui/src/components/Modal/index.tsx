import { ReactPortalId } from '../../enums/ReactPortalId';
import { IModalProps } from './types';
import { Backdrop, ReactPortal } from './_components';

export const Modal = ({ children, visible }: IModalProps) => {
  if (!visible) return null;

  // test if its necessary an "else" because its already returning null

  const body = document.querySelector('body');
  if (body) {
    if (visible) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }

  return (
    <ReactPortal nodeId={ReactPortalId.nodeId}>
      <Backdrop>{children}</Backdrop>
    </ReactPortal>
  );
};
