import styled from '@emotion/styled';
import { SetStateAction } from 'react';
import COLORS from '@/styles/colors';

type Props = {
  value: number;
};

const minZero = (value: number) => {
  // NaN과 Infinity는 0으로, 숫자는 는 그대로
  if (value === null) {
    return 0;
    // Number에서 undefined 는 NaN으로 처리 됨
  }

  const dist = Number(value);

  if (Number.isNaN(dist)) {
    return 0;
  }
  if (!Number.isFinite(dist)) {
    return 0;
  }
  return value;
};

const Index = ({ value }: Props) => {
  console.log('내부', value);
  return (
    <Progress>
      <Loading value={minZero(value * 50)} />
    </Progress>
  );
};

export default Index;

const Progress = styled.div`
  position: absolute;
  top: calc(50% - 2px);
  left: 1%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 98%;
  height: 4px;
  background: ${COLORS.BG_200};
  border-radius: 2px;
  overflow: hidden;
`;

type LoadProps = {
  value: number;
};
const Loading = styled.div<LoadProps>`
  width: ${(props) => props.value}%;
  height: 100%;
  background-color: ${COLORS.Main};
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  top: 0;
  left: 0;
  border-radius: 2px;
  transition: width 0.5s;
`;
