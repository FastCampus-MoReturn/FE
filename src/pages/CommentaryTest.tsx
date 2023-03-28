import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const { kakao } = window;

const CommentaryTest = (props: Props) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  // let x;
  // let y;
  const [address, setAddress] = useState('');
  const showAddress = () => {
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
  };

  useEffect(() => {
    console.log(x, y);
  }, [x, y]);
  // https://new.land.naver.com/search?ms=37.4947766,126.845388,17&a=APT:%ED%95%9C%EB%82%A8%EB%8D%94%ED%9E%90&e=RETAIL
  // https://kbland.kr/map?xy=126.829765811571,37.4905816342872
  // 서울특별시 서초구 반포대로 275

  return (
    <>
      <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      <button onClick={showAddress} type="button">
        검색
      </button>
      <div id="map" style={{ width: '50%', height: '360px', margin: 'auto' }} />
      <Link to={`https://kbland.kr/map?xy=${y},${x}`} target="_blank" rel="noopener noreferrer">
        KB 부동산 시세 조회
      </Link>
      <br />
      <Link
        to={`https://new.land.naver.com/?ms=${y},${x}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        네이버 부동산 시세 조회
      </Link>
      <br />x : {x}
      <br />y : {y}
    </>
  );
};

export default CommentaryTest;
