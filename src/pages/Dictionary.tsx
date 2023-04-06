import styled from '@emotion/styled';
import { useState } from 'react';
import DefaultInfo from '@/components/dictionary/defaultInfo';
import ResultInfo from '@/components/dictionary/resultinfo';

const Dictionary = () => {
  const [result, setResult] = useState<boolean>(false);
  const pageSwitch = () => {
    setResult(!result);
  };

  return (
    <Container>
      <TabButtonWrap state={result}>
        <button type="button" onClick={() => pageSwitch()}>
          등기부 용어 체크
        </button>
        <button type="button" onClick={() => pageSwitch()}>
          등기부 용어 사전
        </button>
      </TabButtonWrap>

      {result ? <ResultInfo /> : <DefaultInfo />}
    </Container>
  );
};

export default Dictionary;

const Container = styled.main`
  width: 1240px;
  margin: 0 auto;
  line-height: 1.5;
  letter-spacing: -0.05em;
  word-break: keep-all;
  padding: 260px 0 200px;
`;

const TabButtonWrap = styled.div<{ state: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  & > button {
    font-size: 36px;
    font-weight: 500;
    color: #171717;
    margin-bottom: 40px;
    padding-bottom: 30px;
    width: 50%;
    text-align: center;
    cursor: pointer;
    background-color: transparent;
    border: none;
    letter-spacing: -0.05em;
    font-family: Pretendard Variable;
  }

  & > button:first-of-type {
    border-bottom: ${(props) => (!props.state ? `2px solid #000` : '1px solid #d9e9ed')};
  }

  & > button:last-of-type {
    border-bottom: ${(props) => (props.state ? `2px solid #000` : '1px solid #d9e9ed')};
  }
`;
