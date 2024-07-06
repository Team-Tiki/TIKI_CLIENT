import { ReactElement, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { ModalBackground, ModalContent } from '@/common/component/Modal/Modal.style';

interface ModalProps {
  isOpen: boolean;
  children?: ReactElement;
}

const Modal = ({ isOpen, children }: ModalProps) => {
  // 모달이 열렸을 때 스크롤을 막기
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    isOpen &&
    ReactDOM.createPortal(
      <>
        <article css={ModalBackground} />
        <dialog css={ModalContent}>{children}</dialog>
      </>,
      document.body
    )
  );
};

export default Modal;
