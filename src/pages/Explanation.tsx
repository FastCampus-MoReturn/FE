/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-absolute-path */
/* eslint-disable react/no-unknown-property */
import React, { Fragment, SetStateAction } from 'react';
import { HiCheck } from 'react-icons/hi';
import styled from '@emotion/styled';
import { useAppSelector } from '@/store/hooks';
import candyIcon from '@/assets/candy.png';
import exclaIcon from '@/assets/excla.png';
import CheckList from '@/components/explanation/CheckList';
import PdfCommentary2 from './PdfCommentary2';

type donutDataType = { [key: number]: { [key: string]: string } };

const Explanation = () => {
  const pdfData = useAppSelector((state) => state.pdf);

  const colorList = ['#2337A9', '#4258D7', '#6C7DE0', '#96A3E9', '#D5DAF6', '#EAECFB'];

  const donutChartRender = (data: donutDataType) => {
    const donutData = [];
    const ownerCount = Object.values(data).length;
    let num = 0;
    for (let i = 1; i <= ownerCount; i += 1) {
      const str = data[i].share;

      let res = [colorList[i - 1], `${num}%`];
      num += Math.round(100 * +str);
      res = [...res, `${num}%`];
      res = [res.join(' ')];
      donutData.push(res);
    }
    const resData = donutData.join(',');
    return resData;
  };

  return (
    <ExplanationArea>
      <h2>등기부등본 해석</h2>
      <Content>
        <h4>
          <img src={candyIcon} alt="아이콘" />
          등기부등본 보기전 한번 읽어보고 가세요.
        </h4>
        <p>
          <HiCheck className="red" size="24" />
          등기부등본은 크게 표제부, 갑구, 을구로 구성돼요.
        </p>
        <p>
          <HiCheck className="red" size="24" />
          <b>계약 중</b>에는 <b>표제부</b>를 열심히 봐주세요! <b>계약 전</b>에는 <b>갑구와 을구</b>
          를 꼼꼼하게 살펴주세요.
        </p>
        <p>
          <HiCheck className="red" size="24" />
          빨간줄은 이미 지나간 내용이니 참고하지 않으셔도 됩니다.
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
          <CheckList
            checkList={['주소지(소재지번, 건물명칭 및 번호)일치', '소유할 지분(대지권 비율)']}
          />
          <ColumnWrap>
            <Left>
              <h5>소재지번, 건물명칭 및 번호</h5>
            </Left>
            <Right>
              <p>{pdfData.address}</p>
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
          <CheckList
            checkList={[
              '소유자 이름',
              '소유자 주민/사업자번호',
              '소유자 주소',
              '등기목적(소유권현황)',
              '등기원인(날짜, 원인)',
            ]}
          />
          <ColumnWrap>
            <Left>
              <h5>소유자</h5>
            </Left>
            <Right>
              {Object.values(pdfData.owner).map((owner, i) => {
                return (
                  <p key={i}>
                    {owner.name}
                    <Highlight>개인</Highlight>
                  </p>
                );
              })}
              <p className="red">
                <img src={exclaIcon} alt="아이콘" />
                실계약시 주인의 신분증을 요구해 일치 여부 확인해야 해요!
              </p>
              <DonutGraph>
                <Donut ownerData={donutChartRender(pdfData.owner)} />
                <div style={{ flex: 1 }}>
                  <p>
                    현재 이 집은{` `}
                    {Object.values(pdfData.owner).map((owner, i) => {
                      return <Fragment key={i}>{owner.name} </Fragment>;
                    })}
                    님 개인이 {Object.values(pdfData.owner).length > 1 ? '공동' : '단독'}소유하고
                    있어요.
                  </p>
                  <NameBox>
                    {Object.values(pdfData.owner).map((owner, i) => {
                      return (
                        <p key={i}>
                          <UserColor ownerColor={colorList[i]} />
                          {owner.name}
                        </p>
                      );
                    })}
                  </NameBox>
                </div>
              </DonutGraph>
            </Right>
          </ColumnWrap>
          <ColumnWrap>
            <Left>
              <h5>주민/사업자 등록번호</h5>
            </Left>
            <Right>
              {Object.values(pdfData.owner).map((owner, i) => {
                return (
                  <span key={i}>
                    {owner.name}: {owner.age}
                  </span>
                );
              })}
            </Right>
          </ColumnWrap>
          <ColumnWrap>
            <Left>
              <h5>주소</h5>
            </Left>
            <Right>
              {Object.values(pdfData.owner).map((owner, i) => {
                return (
                  <p key={i}>
                    {owner.name}: {owner.ownerAddress}
                  </p>
                );
              })}
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
                  누적압류 <span>{pdfData.attachmentCount}회</span>
                </Caution>
              </div>
              <p className="red">
                <img src={exclaIcon} alt="아이콘" />이 곳은 총 {pdfData.attachmentCount}회의
                누적압류를 거쳐 현재는{' '}
                {Object.values(pdfData.owner).map((owner, i) => {
                  return <Fragment key={i}>{owner.name} </Fragment>;
                })}
                님이 소유권을 가지고있어요. <br /> 혹시모를 분쟁의 소지가 있는지 등기목적을 좀 더
                꼼꼼히 확인해주세요!
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
          <CheckList
            checkList={[
              '등기목적',
              '담보총액(채권최고액 합)',
              '채무자정보',
              '근저당권자 정보',
              '전세권자 정보',
            ]}
          />
          <ColumnWrap>
            <Left>
              <h5>등기목적</h5>
            </Left>
            <Right>
              <p>근저당권설정</p>
              <div>
                <Caution>
                  누적 근저당 <span>{pdfData.mortgageCount}회</span>
                </Caution>
              </div>
              <p className="red">
                <img src={exclaIcon} alt="아이콘" />이 곳은 총 {pdfData.mortgageCount}번의
                근저당권설정 기록이 있어요! 근저당 기록이 많을 경우 거래에 주의해주세요.
              </p>
            </Right>
          </ColumnWrap>
          <ColumnWrap>
            <Left>
              <h5>담보총액(채권최고액 합)</h5>
            </Left>
            <Right>
              <p>금 {(pdfData.sumMax_mortgageBond + pdfData.sumPledge).toLocaleString()} 원</p>
              <p className="gray" style={{ fontSize: '16px' }}>
                채권최고액은 실제 채권액보다 평균 약 20%정도 더 높은 금액으로 설정되어, 실제
                채권액과 다를 수 있습니다.
              </p>
            </Right>
          </ColumnWrap>
          {/* <ColumnWrap>
            <Left>
              <h5>채무자</h5>
            </Left>
            <Right>
              <p>김주몽</p>
            </Right>
          </ColumnWrap> */}
          {/* <ColumnWrap>
            <Left>
              <h5>주소</h5>
            </Left>
            <Right>
              <p>서울특별시 강남구 영동대로 640, 사우스윙동 2202호</p>
            </Right>
          </ColumnWrap> */}
          <ColumnWrap>
            <Left>
              <h5>근저당권자</h5>
            </Left>
            <Right>
              {Object.values(pdfData.mortgageeList).length > 0 ? (
                <>
                  <p>
                    {Object.values(pdfData.mortgageeList).map((mortgagee, i) => {
                      return <span key={i}>{mortgagee} </span>;
                    })}
                  </p>
                  <p className="red">
                    <img src={exclaIcon} alt="아이콘" />
                    근저당권자가 은행이 아닌 대부업체나 개인일 경우, 부실채권이 있을 수 있으니
                    주의해주세요!
                  </p>
                  <Caution>
                    근저당권자 <span>총{Object.values(pdfData.mortgageeList).length}명</span>
                  </Caution>
                </>
              ) : (
                '없음'
              )}
            </Right>
          </ColumnWrap>
          {/* <ColumnWrap>
            <Left>
              <h5>주민/사업자 등록번호</h5>
            </Left>
            <Right>
              <span>이재현 : 671108-******</span>
              <span>최현진 : 671108-******</span>
            </Right>
          </ColumnWrap> */}
          {/* <ColumnWrap>
            <Left>
              <h5>주소</h5>
            </Left>
            <Right>
              <span>이재현 : 의왕시 내손중앙로 11, 1106동 603호</span>
              <span>최현진 : 서울 서초구 신반포로 270, 101동 502호</span>
              <p className="red">*근저당 기록이 많을 경우 거래에 주의해주세요!</p>
            </Right>
          </ColumnWrap> */}
          <ColumnWrap>
            <Left>
              <h5>전세권자</h5>
            </Left>
            <Right>
              {Object.values(pdfData.jeonseAuthorityList).length > 0 ? (
                <>
                  <p>
                    {Object.values(pdfData.jeonseAuthorityList).map((jeonseAuthority, i) => {
                      return <span key={i}>{jeonseAuthority} </span>;
                    })}
                  </p>
                  <Caution>
                    전세권자 <span>총{Object.values(pdfData.jeonseAuthorityList).length}명</span>
                  </Caution>
                </>
              ) : (
                '없음'
              )}
            </Right>
          </ColumnWrap>
          {/* <ColumnWrap>
            <Left>
              <h5>주민/사업자 등록번호</h5>
            </Left>
            <Right>
              <p>110111-6035722</p>
            </Right>
          </ColumnWrap> */}
          {/* <ColumnWrap>
            <Left>
              <h5>주소</h5>
            </Left>
            <Right>
              <p>서울특별시 강남구 테헤란로25길 34, 402호</p>
            </Right>
          </ColumnWrap> */}
        </div>
      </Content>
      <PdfCommentary2 />
    </ExplanationArea>
  );
};

export default Explanation;

const ExplanationArea = styled.div`
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
    margin-bottom: 50px;
    padding: 40px;
    border-radius: 20px;
    background-color: #fff3f3;
    h4 {
      padding-top: initial;
      color: #ff5252;
    }
    p {
      line-height: 30px;
      font-size: 20px;
      vertical-align: text-bottom;
    }
    b {
      font-weight: 600;
    }
    svg {
      margin-right: 8px;
      vertical-align: middle;
    }
  }
  h3 {
    margin: 20px 0;
    border-bottom: 1px solid #e9e9ed;
    line-height: 90px;
    font-weight: 600;
    font-size: 30px;
  }
  h4 {
    padding-top: 50px;
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
  img {
    margin-right: 8px;
    vertical-align: middle;
  }
`;

export const Content = styled.div`
  & > div {
    margin-bottom: 100px;
  }
`;

export const ColumnWrap = styled.div`
  display: flex;
  margin: 26px 0;
  line-height: 40px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 20px 0;
  }
`;

export const Left = styled.div`
  min-width: 276px;
  @media only screen and (max-width: 768px) {
    width: initial;
  }
`;

export const Right = styled.div`
  width: 100%;
  font-size: 18px;
  span {
    margin-right: 40px;
    &:last-child {
      margin-right: 0;
    }
  }
  .red {
    font-size: 16px;
  }
`;

const Highlight = styled.span`
  display: inline-flex;
  align-items: center;
  margin: 0 8px;
  padding: 2px 8px;
  height: 24px;
  border-radius: 0 10px;
  background-color: #f0f4ff;
  font-weight: 800;
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
    margin-left: 8px;
    font-weight: 600;
    font-size: 24px;
    color: #ff5252;
  }
`;

const DonutGraph = styled.div`
  display: flex;
  align-items: center;
  column-gap: 40px;
  margin: 16px 0;
  padding: 24px;
  border-radius: 20px;
  p {
    line-height: 27px;
  }
`;

const Donut = styled.div<{ ownerData?: string; ownerColor?: string }>`
  display: inline-block;
  position: relative;
  width: 120px;
  height: 120px;
  background: ${({ ownerColor }) => ownerColor || '#EAECFB'};
  background: conic-gradient(${({ ownerData }) => ownerData || '#EAECFB'});
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

const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 10px;
  max-height: 66px;
  font-size: 14px;
  color: #767676;
  p {
    display: flex;
    align-items: center;
    line-height: 22px;
  }
`;

const UserColor = styled.span<{ ownerColor: string }>`
  display: inline-block;
  margin-right: 10px !important;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ ownerColor }) => ownerColor || '#EAECFB'};
`;
