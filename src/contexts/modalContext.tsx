/* eslint-disable no-multi-assign */
/* eslint-disable import/no-mutable-exports */
import { createContext } from 'react';
import useModal from '@/hooks/useModal';
import ModalPortal from '@/components/ui/ModalPortal';

const ModalContext = createContext<any>(null);

const ModalProvider = ({ children }: any) => {
  const { modal, handleModal, openModal, closeModal, modalContent } = useModal();
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ModalContext.Provider value={{ modal, handleModal, openModal, closeModal, modalContent }}>
      <ModalPortal />
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
