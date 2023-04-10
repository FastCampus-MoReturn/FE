import { useState, useEffect } from 'react';
import axios from 'axios';
import InfoCheck from '@/components/Commentary//InfoCheck';
import ValuationCheck from '@/components/Commentary//ValuationCheck';
import AdditionalFeatures from '@/components/Commentary/AdditionalFeatures';
import { useAppSelector } from '@/store/hooks';
import { errorMessage } from '@/apis/auth';

const PdfCommentary2 = () => {
  const pdfData = useAppSelector((state) => state.pdf);
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    const body = {
      address: pdfData.address,
      researchDate: '12',
    };
    async function post() {
      try {
        const response: any = await axios.post('https://moreturn.shop/api/tradingdetail', body);
        console.log(response.data.list);
        setData(response.data.list);
      } catch (error) {
        console.log(error);
      }
    }
    post();
  }, []);

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const { address } = pdfData;

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
      <InfoCheck pdfData={pdfData} />
      <ValuationCheck x={x} y={y} data={data} pdfData={pdfData} />
      <AdditionalFeatures x={x} y={y} />
    </>
  );
};

export default PdfCommentary2;
