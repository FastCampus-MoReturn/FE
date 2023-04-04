import React from 'react';

interface ContentsBoxProps {
  text: string;
  num: string;
}

const ContentsBox = ({ text = '', num = '' }: ContentsBoxProps) => {
  return (
    <div>
      <div className="transactionMax">
        <span className="text">{text}</span>
        <span className="number">{num}</span>
      </div>
    </div>
  );
};

export default ContentsBox;
