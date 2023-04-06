import styled from '@emotion/styled';
import colors from './colors';

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
  color: ${(props) => props.color || colors.Font_BL};
`;
