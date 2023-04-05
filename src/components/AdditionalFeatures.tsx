import React from 'react';

type Props = {};

const AdditionalFeatures = (props: Props) => {
  return (
    <>
      <div className="feature-link">
        <div className="realtor-call">
          <span>근처 공인 중개사 연락처 &gt;</span>
          <span>부동산 근처의 공인 중개사에게 서류 상 없는 자세한 사항을 물어보세요.</span>
        </div>
        <div className="road-view">
          <span>로드뷰 확인하러가기 &gt;</span>
          <span>로드뷰를 통해 건물의 외관과 주변 상권을 눈으로 확인해보세요.</span>
        </div>
      </div>
      <div className="document-link">
        <div className="realtor-call">
          <span>전입세대열람원 확인하기 &gt; </span>
        </div>
        <div className="road-view">
          <span>확정일자부여현황 확인하기 &gt; </span>
        </div>
      </div>
    </>
  );
};

export default AdditionalFeatures;
