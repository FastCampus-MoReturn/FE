import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Commentary = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const address = '서울시 강남구 삼성동 87 아이파크삼성동';

  useEffect(() => {
    const mapContainer = document.getElementById('map'); // 지도를 표시할 div
    const mapOption = {
      center: new kakao.maps.LatLng(20.450701, 126.570667), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
    };

    // 지도를 생성합니다
    const map = new kakao.maps.Map(mapContainer as HTMLElement, mapOption);
    // 주소-좌표 변환 객체를 생성합니다
    const geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(address, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      setY(parseFloat(result[0].y));
      setX(parseFloat(result[0].x));
      console.log(x, y);
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(parseFloat(result[0].y), parseFloat(result[0].x));

        // 결과값으로 받은 위치를 마커로 표시합니다
        const marker = new kakao.maps.Marker({
          map,
          position: coords,
        });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        const infowindow = new kakao.maps.InfoWindow({
          content: '<div style="width:150px;text-align:center;padding:6px 0;">해당 건물</div>',
        });
        infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
      }
    });
  }, []);

  return (
    <div>
      <CommentaryPage>
        <a href="/">
          <span>홈</span>
        </a>
        <span> &gt; </span>
        <a href="/commentary">
          <span>등기부등본 업로드</span>
        </a>
      </CommentaryPage>
      <RegisterArea>
        <div>
          <StepTitles>등기부등본 해석</StepTitles>
          <span style={{ color: 'red' }}>*등기부등본 정보가 맞는지 다시 한 번 확인해주세요.</span>
        </div>
        <Progressive>
          <ProgressiveBar />
          <CheckedDot style={{ position: 'absolute', left: 0 }}>
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 6L5.03226 10L12 1"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </CheckedDot>
          <NumDot style={{ position: 'absolute', left: 'calc(50% -15px)' }}>2</NumDot>
          <NumDot style={{ position: 'absolute', right: 0 }}>3</NumDot>
        </Progressive>
        <CertInfo>
          <InfoText>
            <div>주소지</div>
            <div>해당 건물 층수</div>
            <div>전용 면적</div>
            <div>소유자 나이</div>
            <div>순위 번호</div>
            <div>설정 금액</div>
            <div>최고 층수</div>
            <div>종별 구분</div>
            <div>소유자 이름</div>
            <div>소유자 주소</div>
            <div>등기 목적</div>
            <div>채권자 이름</div>
          </InfoText>
          <InfoData>
            <div>서울시 강남구 삼성동</div>
            <div>46층</div>
            <div>22층</div>
            <div>공동주택(아파트)</div>
            <div>120m2</div>
            <div>현대산업개발주식회사</div>
            <div>111010001010</div>
            <div>서울 강남구 역삼동</div>
            <div>11</div>
            <div>근저당권설정</div>
            <div>금 9111100000원</div>
            <div>이재현</div>
          </InfoData>
        </CertInfo>
        <div id="map" style={{ width: '50%', height: '360px', margin: 'auto' }} />
        <Link to={`https://kbland.kr/map?xy=${y},${x}`} target="_blank" rel="noopener noreferrer">
          KB 부동산 시세 조회
        </Link>
        <br />
        <Link
          to={`https://new.land.naver.com/?ms=${y},${x}&e=RETAIL`}
          target="_blank"
          rel="noopener noreferrer"
        >
          네이버 부동산 시세 조회
        </Link>
      </RegisterArea>
    </div>
  );
};

export default Commentary;

const CommentaryPage = styled.div`
  padding: 2em;
`;

const RegisterArea = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  margin: auto;
  padding: 2em;
  box-sizing: border-box;
  width: 80%;
  height: 80%;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

const CheckedDot = styled.div`
  width: 30px;
  height: 30px;
  background: #1c2379;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NumDot = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 20px;
  background: #1c2379;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const Progressive = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 5rem;
`;

const ProgressiveBar = styled.div`
  width: 100%;
  height: 3px;
  background: #1c2379;
`;

const CertInfo = styled.div`
  font-family: 'Noto Sans';
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  display: flex;
  gap: 10em;
`;

const InfoText = styled.div`
  font-weight: bold;
  line-height: 2em;
`;

const InfoData = styled.div`
  line-height: 2em;
`;

const StepTitles = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 46px;
  line-height: 150%;
  letter-spacing: -0.05em;
`;
