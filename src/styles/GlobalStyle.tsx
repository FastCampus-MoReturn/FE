import React from "react";
import { css, Global } from "@emotion/react";
import reset from "emotion-reset";
import COLORS from "./colors";

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;

const style = css`
  ${reset}
`;
