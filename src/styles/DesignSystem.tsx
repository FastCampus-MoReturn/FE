import styled from '@emotion/styled';
import { css } from '@emotion/react';
import COLORS from './colors';

interface FontProps {
  color?: string;
  size?: string;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
}

export const Pretendard = styled.span<FontProps>`
  font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
    Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  font-style: normal;
  display: flex;
  align-items: center;
  letter-spacing: -0.05em;

  font-weight: ${(props) => props.weight || 400};
  font-size: ${(props) => props.size || '16px'};
  color: ${(props) => props.color || COLORS.Font_BL};
`;

export const subLargeButton = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;

  width: 100%;
  height: 72px;

  background: #fff;
  color: ${COLORS.Main};
  border: 1px solid ${COLORS.Main};
  border-radius: 12px;

  // font
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: -0.05em;
  &:disabled {
    background: ${COLORS.Disable};
    span {
      color: ${COLORS.Font_grey_03};
    }
  }
  &:hover {
    background: #eaedfb;
  }

  &:focus {
    border: 1px solid ${COLORS.Main};
    outline: 2px dashed ${COLORS.MainBG};
  }
  &:focus-visible {
    outline-offset: 4px;
    outline: 3px dashed ${COLORS.Font_BL};
  }
  &:active {
    background: #c0c8f2;
  }
`;

export const mainLargeButton = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 72px;

  background: ${COLORS.Main};
  border: none;
  outline: none;
  border-radius: 12px;

  // font
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: -0.05em;
  span {
    color: #fff;
  }
  color: #fff;
  &:disabled {
    background: ${COLORS.Disable};
    span {
      color: ${COLORS.Font_grey_03};
    }
  }
  &:hover {
    background: #6c7de0;
  }
  &:focus {
    border-style: none;
    outline: 2px dashed ${COLORS.MainBG};
  }
  &:focus-visible {
    outline-offset: 4px;
    outline: 3px dashed ${COLORS.Font_BL};
  }
  &:active {
    background: #283ebd;
  }
`;
