import { useAtom } from 'jotai';
import type { ReactNode } from 'react';

import { handleModalAtom } from '@/stores/actions';

const useModal = () => {
  const [, setModalState] = useAtom(handleModalAtom);

  const openModal = (newContent: ReactNode) => {
    setModalState({ isOpen: true, content: newContent });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, content: null });
  };

  return { openModal, closeModal };
};

export default useModal;
