import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import { ModalContext } from '@/contexts/modalContext';

const ModalPortal = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { modalContent, modal }: any = useContext(ModalContext);
  if (modal) {
    return ReactDOM.createPortal(
      <ModalDim>
        <ContentWrap>
          <div>{modalContent}</div>
        </ContentWrap>
      </ModalDim>,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      document.querySelector('#root')!,
    );
    // eslint-disable-next-line no-else-return
  } else return null;
};

export default ModalPortal;

const ModalDim = styled.div`
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ContentWrap = styled.div`
  border: none;
  background: white;
  padding: 40px;
  width: auto;
  min-width: 200px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 10px;
  color: black;
  text-align: center;
  @media only screen and (max-width: 320px) {
    width: 98%;
    position: relative;
  }

  h3 {
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 24px;
  }
  button {
    margin: 30px 0;
  }
`;
