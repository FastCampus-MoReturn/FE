import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import ContentsBox from '@/components/common/ContentsBox';

interface Props {
  transactionMax?: string;
  transactionMin?: string;
  x: number;
  y: number;
}

const ValuationCheck = ({ transactionMax = '', transactionMin = '', x = 0, y = 0 }: Props) => {
  return (
    <>
      <div className="title"> 담보물 평가 확인하기 </div>
      <hr />
      <div className="container">
        <div className="valuation-text">
          <span>
            <span className="valuationText">KB시세</span>
            <span className="infoButton">?</span>
          </span>
          <span>
            <span className="transactionText">실거래가</span>
            <span className="infoButton">?</span>
          </span>
        </div>

        <div className="valuation-value">
          <span className="KBValuation">
            <ul>
              <Link
                to={`https://kbland.kr/map?xy=${y},${x}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                KB시세 확인하러 가기
              </Link>
            </ul>
          </span>
          <ContentsBox text="실거래가 최고" num={transactionMax} />
          <ContentsBox text="실거래가 최저" num={transactionMin} />
        </div>
      </div>
    </>
  );
};

export default ValuationCheck;

ValuationCheck.defaultProps = {
  transactionMax: '-',
  transactionMin: '-',
};
