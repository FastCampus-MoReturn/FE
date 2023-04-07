import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  x: number;
  y: number;
};

const AdditionalFeatures = ({ x, y }: Props) => {
  return (
    <>
      <div className="feature-link">
        <div className="realtor-call">
          <Link
            to={`https://www.google.co.kr/maps/data=d${y}d${x}?hl=ko`}
            target="_blank"
            rel="noopener noreferrer"
          >
            근처 공인 중개사 연락처 &gt;
          </Link>
          <span>부동산 근처의 공인 중개사에게 서류 상 없는 자세한 사항을 물어보세요.</span>
        </div>
        <div className="road-view">
          <Link
            to={`https://map.naver.com/v5/?c=${x},${y},0,0,dha&p=zTN08gc9AjfePz9yVtapDg,-178.91,0,80,Float`}
            target="_blank"
            rel="noopener noreferrer"
          >
            로드뷰 확인하러가기 &gt;
          </Link>
          <span>로드뷰를 통해 건물의 외관과 주변 상권을 눈으로 확인해보세요.</span>
        </div>
      </div>
      {/* <div className="document-link">
        <div className="realtor-call">
          <Link
            to="https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000305"
            target="_blank"
            rel="noopener noreferrer"
          >
            전입세대열람원 확인하기 &gt;{' '}
          </Link>
        </div>
        <div className="road-view">
          <Link
            to="https://www.iros.go.kr/ifis/FISUWelcome.dev?undefined&q=CBF050368DCE00F6858BBAEE5BBA50079FDADFC97F19FA"
            target="_blank"
            rel="noopener noreferrer"
          >
            확정일자부여현황 확인하기 &gt;{' '}
          </Link>
        </div>
      </div> */}
    </>
  );
};

export default AdditionalFeatures;
