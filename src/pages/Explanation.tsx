import React from 'react';
import styled from '@emotion/styled';
import { HiCheck } from 'react-icons/hi';
// import { useSelector } from 'react-redux';

const Explanation = () => {
  // const { pdfData... } = useSelector((state) => state.pdfData);
  // console.log(pdfData...);

  // 테스트용 데이터
  const testData = {
    uniqueNumber: '1357-2016-010551',
    maxFloor: 25,
    address: '경기도 하남시 학암동 662 위례신도시엠코타운센트로엘 제6111동 제3층 제301호',
    owner: {
      1: {
        name: '유승락',
        rank: '2',
        share: '3분의 1',
        ownerAddress:
          '경기도 하남시 위례광장로 265, 6111동 301호(학암동,위례신도시엠코타운센트로엘)',
        age: '790831-*******',
      },
      2: {
        name: '이해림',
        rank: '2',
        share: '3분의 1',
        ownerAddress:
          '경기도 하남시 위례광장로 265, 6111동 301호(학암동,위례신도시엠코타운센트로엘)',
        age: '850322-*******',
      },
      3: {
        name: '이해',
        rank: '2',
        share: '3분의 1',
        ownerAddress:
          '경기도 하남시 위례광장로 265, 6111동 301호(학암동,위례신도시엠코타운센트로엘)',
        age: '850322-*******',
      },
    },
    exclusiveArea: 98.7503,
    sumJeonse_deposit: 0,
    jeonseAuthorityList: {},
    mortgageCount: 1,
    mortgageeList: {
      '1': '주식회사하나은행',
    },
    sumMax_mortgageBond: 680400000,
    pledgeCount: 0,
    pledgeCreditorList: {},
    sumPledge: 0,
    attachmentCount: 0,
    sumAncillary_Attachment: 0,
    attachmentList: {},
    printingDate: '202211212250',
  };

  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
  };

  const donutChartRender = () => {
    const donutData = [];
    const ownerCount = Object.keys(testData.owner).length;
    let num = 0;
    for (let i = 1; i <= ownerCount; i += 1) {
      const randomColor = generateColor();
      const str = testData.owner[i]?.share.replace(/ /g, '').split('분의').map(Number);

      let res = [randomColor, num];
      num += Math.round(100 / str[0]) * str[1];
      res = [...res, num];
      // console.log(res);
      donutData.push(res);
    }
    console.log(donutData);
    return donutData;
  };
  donutChartRender();

  return (
    <ExplanationArea>
      <p>(진행도 프로그레시브바 영역)</p>
      <h2>등기부등본 해석</h2>
      <Content>
        <h4>잠깐! 한번 읽어보고 가세요.</h4>
        <p>
          등기부등본은 크게 표제부, 갑구, 을구로 구성돼요. <br /> 계약 중에는 표제부를 열심히
          봐주세요! 계약 전에는 갑구와 을구를 꼼꼼하게 살펴주세요. <br /> 빨간줄은 이미 지나간
          내용이니 참고하지 않으셔도 됩니다.
        </p>
      </Content>
      <Content>
        <h3>업로드 등기부등본 들여다보기</h3>
        <div>
          <h4>표제부</h4>
          <p className="gray">
            표제부는 대상물의 표시에 대한 사항을 나타내요. 투자하고자하는 주소와 표제부 상단에
            기록된 주소 및 호수가 일치하는지 꼭 확인해주세요!
          </p>
          <CheckList>
            <li>
              <span>
                <HiCheck className="white" />
              </span>
              주소지(소재지번, 건물명칭 및 번호)일치
            </li>
            <li>
              <span>
                <HiCheck className="white" />
              </span>
              층과 호수(건물번호)
            </li>
            <li>
              <span>
                <HiCheck className="white" />
              </span>
              소유할 지분(대지권 비율)
            </li>
          </CheckList>
          <ColumnWrap>
            <Left>
              <h5>소재지번, 건물명칭 및 번호</h5>
            </Left>
            <Right>
              <p>서울특별시 강남구 삼성동 87 아이파크 삼성동</p>
            </Right>
          </ColumnWrap>
          <ColumnWrap>
            <Left>
              <h5>건물번호</h5>
            </Left>
            <Right>
              <p>제 22층 제 2202호</p>
            </Right>
          </ColumnWrap>
          <ColumnWrap>
            <Left>
              <h5>대지권 비율</h5>
            </Left>
            <Right>
              <p>32259분의 61.266</p>
            </Right>
          </ColumnWrap>
        </div>
        <div>
          <h4>갑구</h4>
          <p className="gray">
            갑구는 소유권에 대한 사항이 표시되어있어요. 내가 투자하려는 물건과 그 물건의 주인이
            일치하는지 확인할 수 있어요. 등기한 순서대로 기록되기 때문에 현재 부동산의 주인은 마지막
            부분에서 확인가능해요.
          </p>
          <CheckList>
            <li>
              <span>
                <HiCheck className="white" />
              </span>
              소유자 이름
            </li>
            <li>
              <span>
                <HiCheck className="white" />
              </span>
              소유자 주민/사업자번호
            </li>
            <li>
              <span>
                <HiCheck className="white" />
              </span>
              소유자 주소
            </li>
            <li>
              <span>
                <HiCheck className="white" />
              </span>
              등기목적(소유권현황)
            </li>
          </CheckList>
          <ColumnWrap>
            <Left>
              <h5>소유자</h5>
            </Left>
            <Right>
              <p>
                이재현<Highlight>개인</Highlight>
              </p>
              <p>
                최현진<Highlight>개인</Highlight>
              </p>
              <p className="red">*실계약시 주인의 신분증을 요구해 일치 여부 확인해야 해요!</p>
              <DonutGraph>
                <Donut ownerData={donutChartRender()} />
                <p>현재 이 집은 이재현, 최현진님이 개인이 공동소유하고 있어요.</p>
              </DonutGraph>
            </Right>
          </ColumnWrap>
          <ColumnWrap>
            <Left>
              <h5>주민/사업자 등록번호</h5>
            </Left>
            <Right>
              <span>이재현 : 671108-******</span>
              <span>최현진 : 671108-******</span>
            </Right>
          </ColumnWrap>
          <ColumnWrap>
            <Left>
              <h5>주소</h5>
            </Left>
            <Right>
              <span>이재현 : 의왕시 내손중앙로 11, 1106동 603호</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>최현진 : 서울 서초구 신반포로 270, 101동 502호</span>
            </Right>
          </ColumnWrap>
          <ColumnWrap>
            <Left>
              <h5>등기목적</h5>
            </Left>
            <Right>
              <p>없음</p>
              <div>
                <Caution>
                  누적 가압류 <span>1회</span>
                </Caution>
                <Caution>
                  누적 압류 <span>5회</span>
                </Caution>
              </div>
              <p className="red">
                *이 아파트는 총1 번의 가압류, 5번의 압류를 거쳐 현재는 이재현, 최현진님이 소유권을
                가지고있어요. <br /> 혹시모를 분쟁의 소지가 있는지 등기목적을 좀 더 꼼꼼히
                확인해주세요!
              </p>
            </Right>
          </ColumnWrap>
        </div>
        <div>
          <h4>을구</h4>
          <p className="gray">
            갑구는 소유권 이외의 권리에 관한 사항이 표시되어 있어요. 가압류나 근저당권에 대한 내용이
            있으면 해당 건물에 빚이 있다는 것이니 참고해주세요. 만약 표기 내용 중 글자 가운데 선이
            그어져 있다면 대출을 갚았다는 뜻이예요. 대출이 남아 있는 경우엔 선이 그어지지 않은
            상태로 채권최고액과 근저당권자(돈을 빌려준사람, 은행) 및 채무자가 기록되어 있어요.
          </p>
          <CheckList>
            <li>
              <span>
                <HiCheck className="white" />
              </span>
              등기목적
            </li>
            <li>
              <span>
                <HiCheck className="white" />
              </span>
              채권최고액
            </li>
            <li>
              <span>
                <HiCheck className="white" />
              </span>
              채무자정보
            </li>
            <li>
              <span>
                <HiCheck className="white" />
              </span>
              근저당권자 정보
            </li>
          </CheckList>
          <ColumnWrap>
            <Left>
              <h5>등기목적</h5>
            </Left>
            <Right>
              <p>근저당권설정</p>
              <div>
                <div>
                  누적 근저당 기록 <span>8회</span>
                </div>
              </div>
              <p className="red">
                *이 아파트는 총 8번의 근저당권설정 기록이 있어요! 근저당 기록이 많을 경우 거래에
                주의해주세요.
              </p>
            </Right>
          </ColumnWrap>
          <ColumnWrap>
            <Left>
              <h5>채권최고액</h5>
            </Left>
            <Right>
              <p>금 910,000,000 원</p>
              <p className="gray">
                채권최고액은 실제 채권액보다 평균 약 20%정도 더 높은 금액으로 설정되어, 실제
                채권액과 다를 수 있습니다.
              </p>
              <p>
                *채권최고액(실제 채권액보다 약 20% 높은 금액)이 너무 높거나 근저당 기록이 많은 경우
                거래에 주의해야해요.
              </p>
              <p>그래프 영역</p>
            </Right>
          </ColumnWrap>
          <ColumnWrap>
            <Left>
              <h5>채무자</h5>
            </Left>
            <Right>
              <p>김주몽</p>
            </Right>
          </ColumnWrap>
          <ColumnWrap>
            <Left>
              <h5>주소</h5>
            </Left>
            <Right>
              <p>서울특별시 강남구 영동대로 640, 사우스윙동 2202호</p>
            </Right>
          </ColumnWrap>
          <ColumnWrap>
            <Left>
              <h5>근저당권자</h5>
            </Left>
            <Right>
              <p>이재현 최현진</p>
              {/* 그래프 */}
            </Right>
          </ColumnWrap>
          <ColumnWrap>
            <Left>
              <h5>주민/사업자 등록번호</h5>
            </Left>
            <Right>
              <p>이재현 : 671108-******</p>
              <p>최현진 : 671108-******</p>
            </Right>
          </ColumnWrap>
          <ColumnWrap>
            <Left>
              <h5>주소</h5>
            </Left>
            <Right>
              <p>이재현 : 의왕시 내손중앙로 11, 1106동 603호</p>
              <p>최현진 : 서울 서초구 신반포로 270, 101동 502호</p>
              <p className="red">*근저당 기록이 많을 경우 거래에 주의해주세요!</p>
            </Right>
          </ColumnWrap>
        </div>
      </Content>
    </ExplanationArea>
  );
};

export default Explanation;

const ExplanationArea = styled.div`
  padding: 60px;
  max-width: 1240px;
  background-color: white;
  color: black;
  h2 {
    padding: 44px 0;
    text-align: center;
    font-weight: 600;
    font-size: 36px;
  }
  h2 + div {
    margin: 80px 0;
    padding: 40px;
    border-radius: 20px;
    background-color: #f5f6fa;
    p {
      line-height: 30px;
      font-size: 20px;
    }
  }
  h3 {
    margin: 20px 0;
    border-bottom: 1px solid #d2d2dc;
    line-height: 100px;
    font-weight: 600;
    font-size: 30px;
  }
  h4 {
    padding-top: 40px;
    padding-bottom: 20px;
    font-weight: 600;
    font-size: 24px;
  }
  h5 {
    font-weight: 600;
    font-size: 18px;
  }
  .white {
    color: white;
  }
  .gray {
    line-height: 24px;
    color: #767676;
  }
  .red {
    line-height: 24px;
    color: #ff5252;
  }
`;

const Content = styled.div`
  & > div {
    margin-bottom: 60px;
  }
`;

const CheckList = styled.ul`
  margin: 20px 0;
  display: flex;
  gap: 20px;
  padding: 20px;
  width: fit-content;
  border-radius: 12px;
  background-color: #eaedf8;
  li {
    display: flex;
    align-items: center;
    color: #4258d7;
    span {
      display: inline-flex;
      margin-right: 6px;
      align-items: center;
      justify-content: center;
      min-width: 24px;
      min-height: 24px;
      border-radius: 9999px;
      background-color: #4258d7;
      font-size: 20px;
    }
  }
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const ColumnWrap = styled.div`
  display: flex;
  margin: 40px 0;
  line-height: 40px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 20px 0;
  }
`;
const Left = styled.div`
  min-width: 236px;
  @media only screen and (max-width: 768px) {
    width: initial;
  }
`;
const Right = styled.div`
  font-size: 18px;
`;

const Highlight = styled.span`
  display: inline-flex;
  align-items: center;
  margin: 0 4px;
  padding: 2px 8px;
  height: 24px;
  border-radius: 0 10px;
  background-color: #f0f4ff;
  font-weight: 600;
  font-size: 14px;
  color: #4258d7;
`;

const Caution = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  margin-right: 12px;
  padding: 20px 30px;
  border-radius: 10px;
  background-color: #fff3f3;
  span {
    color: #ff5252;
  }
`;

const DonutGraph = styled.div`
  display: flex;
  gap: 20px;
  margin: 10px 0;
  padding: 34px;
  border-radius: 20px;
  border: 1px solid #d2d2dc;
`;

const Donut = styled.div`
  display: inline-block;
  position: relative;
  width: 120px;
  height: 120px;
  background: conic-gradient(#8b22ff 0% 25%, #ffc33b 25% 56%, #21f3d6 56% 100%);
  border-radius: 50%;
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: white;
    transform: translate(-50%, -50%);
  }
`;
