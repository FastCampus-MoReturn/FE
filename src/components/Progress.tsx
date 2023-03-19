import styled from '@emotion/styled';

type Props = {
  value: number;
};

const Index = ({ value }: Props) => {
  return (
    <Progress>
      <Loading value={value}>{value === 100 ? 'Loading complete' : null}</Loading>
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
