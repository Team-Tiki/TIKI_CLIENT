import { ReactElement, useEffect, useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentContent, setCurrentContent] = useState<ReactElement | null>(null);

  // 열기
  const openModal = (content: ReactElement) => {
    setCurrentContent(content);
    setIsOpen(true);
  };

  // 닫기
  const closeModal = () => {
    setIsOpen(false);
  };

  // 뒤로가기 이벤트 처리
  useEffect(() => {
    const preventGoBack = () => {
      history.go(1);
      closeModal();
    };

    if (isOpen) {
      history.pushState(null, '', location.href);
      window.addEventListener('popstate', preventGoBack);
    }

    return () => window.removeEventListener('popstate', preventGoBack);
  }, [isOpen, closeModal]);

  return {
    isOpen,
    currentContent,
    setCurrentContent,
    openModal,
    closeModal,
  };
};

export default useModal;
