import React from 'react';
import ReactModal from 'react-modal';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';
import type { RootState } from '@/store/store';

ReactModal.setAppElement('#root');
const ConfirmModal = () => {
  const modalState = useSelector((state: RootState) => state.modal);

  const modalStyles = {
    overlay: {
      backgroundColor: 'rgba(0,0,0,.25)',
    },
    content: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '500px',
      height: 'fit-content',
      padding: '50px',
      color: 'black',
    },
  };

  return (
    <div>
      <ReactModal isOpen={modalState.isOpen} style={modalStyles}>
        <Contents>
          <h2>modal title {modalState.title}</h2>
          <p>modal body {modalState.description}</p>
          <button type="button" onClick={modalState.onClickCancel}>
            {modalState.cancelText ? modalState.cancelText : '취소'}
          </button>
          <button type="button" onClick={modalState.onClickOk}>
            {modalState.okText ? modalState.okText : '확인'}
          </button>
        </Contents>
      </ReactModal>
    </div>
  );
};

export default ConfirmModal;

const Contents = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  text-align: center;
  h2 {
    width: 100%;
    font-size: 30px;
    font-weight: bold;
  }
  p {
    padding-bottom: 40px;
    width: 100%;
    font-size: 20px;
  }
  button {
    padding: 20px 50px;
    height: fit-content;
  }
`;
