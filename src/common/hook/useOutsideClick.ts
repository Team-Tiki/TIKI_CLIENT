import { useCallback, useEffect, useRef } from 'react';

type Callback = () => void;

export const useOutsideClick = <T extends HTMLElement = HTMLDivElement>(onClose: Callback) => {
  const ref = useRef<T>(null);

  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      if (!ref.current || !(event.target instanceof HTMLElement)) return;

      if (!ref.current.contains(event.target as Node)) {
        onClose?.();
      }
    },
    [onClose]
  );

  const handleEscKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!ref.current) return;

      if (e.key === 'Escape') {
        onClose?.();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    window.addEventListener('keydown', handleEscKeyDown);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
      window.removeEventListener('keydown', handleEscKeyDown);
    };
  }, [onClose, handleEscKeyDown, handleOutsideClick]);

  return ref;
};
