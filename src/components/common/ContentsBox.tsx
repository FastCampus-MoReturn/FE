import React from 'react';
import styled from '@emotion/styled';

interface ContentsBoxProps {
  text: string;
  num: string;
}

const ContentsBox = ({ text = '', num = '' }: ContentsBoxProps) => {
  return (
    <BoxColor>
      <div>
        {text} <span>{num}</span>
      </div>
    </BoxColor>
  );
};

export default ContentsBox;

const BoxColor = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  margin-right: 12px;
  padding: 20px 30px;
  border-radius: 10px;
  background-color: #f5f6fa;
  span {
    margin-left: 8px;
    font-weight: 600;
    font-size: 24px;
    color: #4258d7;
  }
`;
