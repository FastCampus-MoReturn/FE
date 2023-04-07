import { useState, useEffect } from 'react';
import InfoCheck from '@/components/Commentary//InfoCheck';
import ValuationCheck from '@/components/Commentary//ValuationCheck';
import ValuationChartContainer from '@/components/Commentary//ValuationChartContainer';
import AdditionalFeatures from '@/components/Commentary/AdditionalFeatures';

const PdfCommentary2 = () => {
  const address = '서울특별시 구로구 경인로 70';
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
      <InfoCheck />
      <ValuationCheck x={x} y={y} />
      <ValuationChartContainer />
      <AdditionalFeatures x={x} y={y} />
    </>
  );
};

export default PdfCommentary2;
