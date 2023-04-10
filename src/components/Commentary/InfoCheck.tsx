import styled from '@emotion/styled';
import { BsQuestionCircle } from 'react-icons/bs';
import { ColumnWrap, Content, Left, Right } from '@/pages/Explanation';
import { useAppSelector } from '@/store/hooks';

interface Props {
  pdfData: any;
}

const InfoCheck = ({ pdfData }: Props) => {
  return (
    <div>
      <h3> 담보물 기본정보 체크하기 </h3>
      <ColumnWrap>
        <Left>
          <h5>담보물의 주소지</h5>
        </Left>
        <Right>
          <span>{pdfData.address}</span>
        </Right>
      </ColumnWrap>
      <ColumnWrap>
        <Left>
          <h5>부동산 종류</h5>
        </Left>
        <Right>
          <span>아파트</span>
        </Right>
      </ColumnWrap>
      <ColumnWrap>
        <Left>
          <h5>해당 물건 층수 / 최고 층</h5>
        </Left>
        <Right>
          <span>{`${pdfData.currentFloor}층 / ${pdfData.maxFloor}층`}</span>
        </Right>
      </ColumnWrap>
      <ColumnWrap style={{ margin: '0 0 100px 0' }}>
        <Left>
          <QuestionFlex>
            <span>전용면적 </span>
            <BsQuestionCircle />
          </QuestionFlex>
        </Left>
        <Right>
          <span className="">{pdfData.exclusiveArea}㎡</span>
          <SmallColumnWrap>
            <SmallLeft>
              <span>전용면적</span>
            </SmallLeft>
            <SmallRight>
              <p>
                거주자가 독점적으로 사용할 수 있는 방, 거실, 주방, 화장실 등의 실제 주거에 사용되는
                공간
              </p>
            </SmallRight>
          </SmallColumnWrap>
          <SmallColumnWrap>
            <SmallLeft>
              <span>공급(공용)면적</span>
            </SmallLeft>
            <SmallRight>
              <p>
                전용면적에 주거 공용면적을 합한 것으로 주거 공용 공간인 비상 계단, 복도, 엘리베이터
                등의 면적
              </p>
            </SmallRight>
          </SmallColumnWrap>
          <SmallColumnWrap style={{ margin: '0 0 30px 0' }}>
            <SmallLeft>
              <span>서비스 면적</span>
            </SmallLeft>
            <SmallRight>
              <p>발코니나 베란다 등은 전용면적이나 공급면적에 포함되지 않는 공간</p>
            </SmallRight>
          </SmallColumnWrap>
          <div className="mean">
            <ImgFrame>
              <Img src="/src/assets/img/areaVoca.png" alt="면적 용어" />
            </ImgFrame>
          </div>
        </Right>
      </ColumnWrap>
    </div>
  );
};

export default InfoCheck;

const ImgFrame = styled.div`
  width: 100%;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.23);
`;

export const SmallColumnWrap = styled.div`
  font-size: 14px;
  display: flex;
  line-height: 30px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin: 20px 0;
    gap: 5px;
  }
`;

export const SmallLeft = styled.div`
  min-width: 100px;
  @media only screen and (max-width: 768px) {
    width: initial;
  }
`;

export const SmallRight = styled.div`
  width: 100%;
`;

export const QuestionFlex = styled.h5`
  display: flex;
  align-items: center;
  gap: 5px;
`;
