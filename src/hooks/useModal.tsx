import { useState } from 'react';

export default () => {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState(Boolean);

  const handleModal = (content = false): void => {
    setModal(!modal);
    if (content) {
      setModalContent(content);
    }
  };

  const closeModal = (content = false) => {
    setModal(false);
    setModalContent(content);
  };

  const openModal = (content = false) => {
    setModal(true);
    if (content) {
      setModalContent(content);
    }
  };

  return { modal, handleModal, openModal, closeModal, modalContent };
};
