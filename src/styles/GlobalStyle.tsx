import React from 'react';
import { css, Global } from '@emotion/react';
import reset from 'emotion-reset';
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

export default GlobalStyle;
