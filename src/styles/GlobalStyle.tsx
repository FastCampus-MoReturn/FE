import React from 'react';
import { css, Global } from '@emotion/react';
import reset from 'emotion-reset';
import COLORS from './colors';

const style = css`
  ${reset}
  * {
    box-sizing: border-box;
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
