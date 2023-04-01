import React from 'react';
import { css, Global } from '@emotion/react';
import reset from 'emotion-reset';
import styled from '@emotion/styled';
import { ToastContainer } from 'react-toastify';
import COLORS from './colors';

const style = css`
  ${reset}
  html, body {
    background-color: #fff;
    color: #000;

    a {
      color: #000;
      text-decoration: none;
    }
  }
  * {
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
  }

  #root {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    position: relative;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

// tostmodal custom css
export const Container = styled(ToastContainer)`
  .Toastify__toast {
    font-size: 16px;
    border-radius: 50px;
    padding: 16px 28px;
    border-radius: 16px;
    font-size: 20px;
    font-weight: 600;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  --toastify-toast-width: 1030px;

  .Toastify__toast-icon {
    width: 0;
    height: 0;
    display: none;
    position: absolute;
    top: -1px;
    left: -1px;
    margin: -1px;
  }

  .Toastify__toast--info {
    background-color: #fff;
    border: 1px solid #ddd;
  }

  .Toastify__toast--success {
    background-color: #fff;
    border: 1px solid #ddd;
  }

  .Toastify__toast--error {
    background-color: #fff;
    border: 1px solid #ff5252;
    color: #ff5252;

    div {
      text-align: center;
    }
  }
`;

export default GlobalStyle;
