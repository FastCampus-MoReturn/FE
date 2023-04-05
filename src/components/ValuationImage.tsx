import React from 'react';
import ValuationGraph from '@/components/ValuationGraph';

type Props = {};

const ValuationImage = (props: Props) => {
  const data = [
    { name: 'January', value: 10 },
    { name: 'February', value: 20 },
    // Add more data here
  ];
  return (
    <>
      <div className="valuation-image-text">
        <span>
          <span>*</span>
          <span>실거래가 이미지</span>
        </span>
        <span>최근 실거래가</span>
      </div>
      <hr />
      <div className="color-section">
        <div className="min-max-color">
          <span>최저</span>
          <div className="color-1"> </div>
          <div className="color-2"> </div>
          <div className="color-3"> </div>
          <div className="color-4"> </div>
          <div className="color-5"> </div>
          <span>최고</span>
        </div>
        <div className="target-color">
          <div className="target-1"> </div>
          <span>해당 매물</span>
        </div>
      </div>

      <ValuationGraph data={data} />
    </>
  );
};

export default ValuationImage;
