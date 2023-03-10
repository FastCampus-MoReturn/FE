import React from 'react';
import { css, Global } from '@emotion/react';
import reset from 'emotion-reset';
import COLORS from './colors';

const style = css`
  ${reset}
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
