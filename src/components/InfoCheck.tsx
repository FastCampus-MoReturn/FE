import styled from '@emotion/styled';

interface Props {
  address?: string;
  estateType?: string;
  estateFloor?: string;
  estateMaxFloor?: string;
  estateArea?: string;
}

const InfoCheck = ({ address, estateType, estateFloor, estateMaxFloor, estateArea }: Props) => {
  return (
    <>
      <div className="title"> 담보물 기본정보 체크하기 </div>
      <hr />
      <div className="container">
        <div className="info-check-text">
          <span className="valuationText">담보물의 주소지</span>
          <span className="infoButton">부동산 종류</span>
          <span className="KBValuation">해당 물건 층수 / 최고 층</span>
          <span>
            <span className="KBValuation">전용면적</span>
            <span className="infoButton">?</span>
          </span>
        </div>

        <div className="info-check-value">
          <span className="transactionText">{address}</span>
          <span className="">{estateType}</span>
          <span className="">
            <span>{estateFloor}</span>
            <span> / </span>
            <span>{estateMaxFloor}</span>
          </span>
          <span className="">
            <span className="">{estateArea}</span>
            <p>
              <div className="key">
                <span>전용면적</span>
                <span>공급(공용)면적</span>
                <span>서비스 면적</span>
              </div>
              <div className="mean">
                <span>
                  거주자가 독점적으로 사용할 수 있는 방, 거실, 주방, 화장실 등의 실제 주거에
                  사용되는 공간
                </span>
                <span>
                  전용면적에 주거 공용면적을 합한 것으로 주거 공용 공간인 비상 계단, 복도,
                  엘리베이터 등의 면적
                </span>
                <span>발코니나 베란다 등은 전용면적이나 공급면적에 포함되지 않는 공간</span>
                <ImgFrame>
                  <Img src="/src/assets/img/areaVoca.png" alt="면적 용어" />
                </ImgFrame>
              </div>
            </p>
          </span>
        </div>
      </div>
    </>
  );
};

export default InfoCheck;

InfoCheck.defaultProps = {
  address: '주소',
  estateType: '부동산 유형',
  estateFloor: '층수',
  estateMaxFloor: '최고 층수',
  estateArea: '면적',
};

const ImgFrame = styled.div`
  width: 50%;
`;

const Img = styled.img`
  width: 100%;
`;
