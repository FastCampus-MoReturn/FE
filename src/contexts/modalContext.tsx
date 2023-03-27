/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-multi-assign */
/* eslint-disable import/no-mutable-exports */
import { createContext } from 'react';
import useModal from '@/hooks/useModal';
import ModalPortal from '@/components/ModalPortal';

let ModalContext: any;
const { Provider } = (ModalContext = createContext({}));

const ModalProvider = ({ children }: any) => {
  const { modal, handleModal, openModal, closeModal, modalContent } = useModal();
  return (
    <Provider value={{ modal, handleModal, openModal, closeModal, modalContent }}>
      <ModalPortal />
      {children}
    </Provider>
  );
};

export { ModalContext, ModalProvider };
