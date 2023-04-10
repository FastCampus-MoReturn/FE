import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { BsQuestionCircle } from 'react-icons/bs';
import { css } from '@emotion/react';
import { List, max, min } from 'lodash';
import ContentsBox from '@/components/common/ContentsBox';
import { ColumnWrap, Content, Left, Right } from '@/pages/Explanation';
import ValuationChartContainer from './ValuationChartContainer';
import { QuestionFlex } from './InfoCheck';
import { PdfState } from '@/store/pdfSlice';

interface Props {
  x: number;
  y: number;
  data: {
    amount: string;
    buildYear: string;
    eupMyunDongCode: string;
    jibun: string;
    legDong: string;
    serialNumber: string;
    siGunguCode: string;
    tradeAptName: string;
    tradeDay: string;
    tradeExclusiveArea: string;
    tradeMonth: string;
    tradeType: string;
    tradeYear: string;
    tradefloor: string;
  }[];
  pdfData: PdfState;
}

const ValuationCheck = ({ x = 0, y = 0, data, pdfData }: Props) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  const amounts = data.map((element) => {
    return parseInt(element.amount, 10);
  });

  // eslint-disable-next-line
  const maxAmount = String(`${max(amounts) ? max(amounts)! / 10000 : '-'}억 `);
  const minAmount = String(`${min(amounts) ? min(amounts)! / 10000 : '-'}억 `);

  return (
    <div>
      <h3> 담보물 평가 확인하기 </h3>
      <ColumnWrap>
        <Left>
          <QuestionFlex>
            <span>KB시세 </span>
            <BsQuestionCircle />
          </QuestionFlex>
        </Left>
        <Right>
          <ul>
            <Link
              to={`https://kbland.kr/map?xy=${y},${x}`}
              target="_blank"
              rel="noopener noreferrer"
              css={UnderLined}
            >
              KB시세 확인하러 가기
            </Link>
          </ul>
        </Right>
      </ColumnWrap>
      <ColumnWrap>
        <Left>
          <QuestionFlex>
            <span>실거래가 </span>
            <BsQuestionCircle />
          </QuestionFlex>
        </Left>
        <Right>
          <div>
            <ContentsBox text="실거래가 최고" num={maxAmount} />
            <ContentsBox text="실거래가 최저" num={minAmount} />
          </div>
          <MiniText>
            <div>{`기준일 : ${year}.${month}`}</div>
            {/* <div>제공처 : {date}</div> */}
          </MiniText>
          <ValuationChartContainer propData={data} pdfData={pdfData} />
        </Right>
      </ColumnWrap>
    </div>
  );
};

export default ValuationCheck;

const MiniText = styled.div`
  display: flex;
  margin-bottom: 60px;
  font-size: 14px;
  div {
    &:first-child {
      margin-right: 10px;
    }
  }
  @media only screen and (max-width: 768px) {
    width: initial;
    flex-direction: column;
    padding: 0;
    line-height: 20px;
  }
`;

const UnderLined = css`
  text-underline-offset: 7px;
  text-decoration: underline;
  color: #767676;
`;
