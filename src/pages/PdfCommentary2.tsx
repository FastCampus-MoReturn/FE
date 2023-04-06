import ContentsBox from '@/components/common/ContentsBox';

type Props = {};

const PdfCommentary2 = (props: Props) => {
  return (
    <>
      <div className="title"> 담보물 평가 확인하기 </div>
      <hr />
      <div className="container">
        <div className="valuation">
          <span className="valuationText">KB시세</span>
          <span className="infoButton">?</span>
          <span className="KBValuation">
            <ul>KB시세 확인하러 가기</ul>
          </span>
        </div>

        <div className="actualTransaction">
          <span className="transactionText">실거래가</span>
          <span className="infoButton">?</span>
          <ContentsBox text="실거래가 최고" num="56억" />
          <ContentsBox text="실거래가 최저" num="25억" />
        </div>
      </div>
    </>
  );
};

export default PdfCommentary2;
