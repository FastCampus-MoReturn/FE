import styled from '@emotion/styled';

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
      <Loading value={minZero(value)}>{value === 100 ? 'Loading complete' : null}</Loading>
    </Progress>
  );
};

export default Index;

const Progress = styled.div`
  width: 100%;
  height: 40px;
  background-color: #eee;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
`;

const Loading = styled.div<Props>`
  width: ${(props) => props.value}%;
  height: 100%;
  background-color: #000;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  top: 0;
  left: 0;
  transition: width 0.5s;
`;
