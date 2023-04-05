import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ContentsBox from '@/components/common/ContentsBox';

interface Props {
  address?: string;
  transactionMax?: string;
  transactionMin?: string;
}

const ValuationCheck = ({
  address = '서울특별시 강남구 역삼동 826-21',
  transactionMax = '',
  transactionMin = '',
}: Props) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    console.log(address, x, y);

    // 주소-좌표 변환 객체를 생성합니다
    const geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(address, function (result) {
      // 정상적으로 검색이 완료됐으면
      setY(parseFloat(result[0].y));
      setX(parseFloat(result[0].x));
    });
  }, []);

  useEffect(() => {
    console.log(x, y);
  }, [x, y]);

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
  address: '서울특별시 강남구 역삼동 826-21',
  transactionMax: '-',
  transactionMin: '-',
};
