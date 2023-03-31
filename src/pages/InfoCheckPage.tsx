/* eslint-disable react/jsx-no-useless-fragment */
import styled from '@emotion/styled';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const InfoCheckPage = () => {
  const [page, setPage] = useState([true, false, false]);

  const pageSwitchFn = (type: string) => {
    if (type === 'next') {
      switch (page[0]) {
        case true:
          setPage([false, true, false]);
          break;
        case false:
          setPage([false, false, true]);
          break;
        default:
          break;
      }
    } else {
      switch (page[1]) {
        case true:
          setPage([true, false, false]);
          break;
        case false:
          if (page[0] === false) setPage([false, true, false]);
          break;
        default:
          break;
      }
    }
    window.scrollTo(0, 0);
  };

  return (
    <>
      {page[0] === true && (
        <Container>
          <Title>등기부등본 정보확인하기 1</Title>

          <section>
            <TableContainer>
              <table>
                <thead>
                  <tr>
                    <th colSpan={5}>
                      [ 표 제 부 ]<span>( 1동의 건물의 표시 )</span>
                    </th>
                  </tr>
                  <tr>
                    <th>표시번호</th>
                    <th>접수</th>
                    <th>소재지변,건물명칭 및 번호</th>
                    <th>건물 내역</th>
                    <th>등기원인 및 기타사항</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> </td>
                    <td> </td>
                    <td>
                      <NumberTags>
                        <a href="#tag1">
                          <span>1</span>
                          주소지
                        </a>
                      </NumberTags>
                    </td>
                    <td>
                      <NumberTags>
                        <a href="#tag2">
                          <span>2</span>
                          최고층수
                        </a>
                        <a href="#tag3">
                          <span>3</span>
                          건물종별
                        </a>
                      </NumberTags>
                    </td>
                  </tr>
                </tbody>
              </table>
            </TableContainer>
            <TableContainer>
              <table>
                <thead>
                  <tr className="non-bg">
                    <th colSpan={4}>
                      <span>( 대지권의 표시 )</span>
                    </th>
                  </tr>
                  <tr>
                    <th>표시번호</th>
                    <th>대지권종류</th>
                    <th>대지권비율</th>
                    <th>등기원인 및 기타사항</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> </td>
                    <td> </td>
                    <td>
                      <NumberTags>
                        <a href="#tag4">
                          <span>4</span>
                          대지권비율
                        </a>
                      </NumberTags>
                    </td>
                    <td> </td>
                  </tr>
                </tbody>
              </table>
            </TableContainer>
            <TableContainer>
              <table>
                <thead>
                  <tr>
                    <th colSpan={5}>
                      [ 표 제 부 ]<span>( 전유부분의 건물의 표시 )</span>
                    </th>
                  </tr>
                  <tr>
                    <th>표시번호</th>
                    <th>접수</th>
                    <th>건물 번호</th>
                    <th>건물 내역</th>
                    <th>등기원인 및 기타사항</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> </td>
                    <td> </td>
                    <td>
                      <NumberTags>
                        <a href="#tag5">
                          <span>5</span>
                          건물번호
                        </a>
                      </NumberTags>
                    </td>
                    <td> </td>
                  </tr>
                </tbody>
              </table>
            </TableContainer>
          </section>

          <NumberTagsWrap>
            <div>
              <NumberTags>
                <span id="tag1">1</span>
                주소지
              </NumberTags>
              <TagsInfo>
                <p>서울 강남구 삼성동 87 아이파크삼성동</p>
              </TagsInfo>
            </div>
            <div>
              <NumberTags>
                <span id="tag2">2</span>
                최고층수
              </NumberTags>
              <TagsInfo>
                <p>46층</p>
              </TagsInfo>
            </div>
            <div>
              <NumberTags>
                <span id="tag3">3</span>
                건물종별
              </NumberTags>
              <TagsInfo>
                <p>공동주택(아파트)</p>
              </TagsInfo>
            </div>
            <div>
              <NumberTags>
                <span id="tag4">4</span>
                대지권비율
              </NumberTags>
              <TagsInfo>
                <p>32259분의 61.266</p>
              </TagsInfo>
            </div>
            <div>
              <NumberTags>
                <span id="tag5">5</span>
                건물번호
              </NumberTags>
              <TagsInfo>
                <p>제22층 제2202호</p>
              </TagsInfo>
            </div>
          </NumberTagsWrap>
        </Container>
      )}

      {page[1] === true && (
        <Container>
          <Title>등기부등본 정보확인하기 2</Title>

          <section>
            <TableContainer>
              <table>
                <thead>
                  <tr>
                    <th colSpan={5}>
                      [ 갑 구 ]<span>( 소유권에 관한 사항 )</span>
                    </th>
                  </tr>
                  <tr>
                    <th>순위번호</th>
                    <th>등기목적</th>
                    <th>접수</th>
                    <th>등기원인</th>
                    <th>권리자 및 기타사항</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td>
                      <NumberTags>
                        <a href="#tag6">
                          <span>6</span>
                          소유자1 정보
                        </a>
                        <a href="#tag7">
                          <span>7</span>
                          소유자2 정보
                        </a>
                      </NumberTags>
                    </td>
                  </tr>
                </tbody>
              </table>
            </TableContainer>
          </section>
          <NumberTagsWrap>
            <div>
              <NumberTags>
                <span id="tag6">6</span>
                소유자1 정보
              </NumberTags>
              <TagsInfo>
                <p>
                  이재현 671108-****** <br />
                  의왕시 내손중앙로 11, 1106동 603호
                </p>
              </TagsInfo>
            </div>
            <div>
              <NumberTags>
                <span id="tag7">7</span>
                소유자2 정보
              </NumberTags>
              <TagsInfo>
                <p>
                  이재현 671108-****** <br />
                  의왕시 내손중앙로 11, 1106동 603호
                </p>
              </TagsInfo>
            </div>
          </NumberTagsWrap>
        </Container>
      )}

      {page[2] === true && (
        <Container>
          <Title>등기부등본 정보확인하기 2</Title>

          <section>
            <TableContainer>
              <table>
                <thead>
                  <tr>
                    <th colSpan={5}>
                      [ 을 구 ]<span>( 소유권 이외의 권리에 관한 사항 )</span>
                    </th>
                  </tr>
                  <tr>
                    <th>순위번호</th>
                    <th>등기목적</th>
                    <th>접수</th>
                    <th>등기원인</th>
                    <th>권리자 및 기타사항</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <NumberTags>
                        <a href="#tag8">
                          <span>8</span>
                          등기목적
                        </a>
                      </NumberTags>
                    </td>
                    <td> </td>
                    <td> </td>
                    <td>
                      <NumberTags>
                        <a href="#tag9">
                          <span>9</span>
                          채권최고액
                        </a>
                        <a href="#tag10">
                          <span>10</span>
                          채무자 정보
                        </a>
                        <a href="#tag11">
                          <span>11</span>
                          근저당권자1 정보
                        </a>
                        <a href="#tag12">
                          <span>12</span>
                          근저당권자2 정보
                        </a>
                      </NumberTags>
                    </td>
                  </tr>
                </tbody>
              </table>
            </TableContainer>
          </section>
          <NumberTagsWrap>
            <div>
              <NumberTags>
                <span id="tag8">8</span>
                등기목적
              </NumberTags>
              <TagsInfo>
                <p>근저당권설정</p>
              </TagsInfo>
            </div>
            <div>
              <NumberTags>
                <span id="tag9">9</span>
                채권최고액
              </NumberTags>
              <TagsInfo>
                <p>금 910,000,000 원</p>
              </TagsInfo>
            </div>
            <div>
              <NumberTags>
                <span id="tag10">10</span>
                채무자 정보
              </NumberTags>
              <TagsInfo>
                <p>
                  김주몽 <br />
                  서울 강남구 영동대로 640, 사우스윙동 2202호
                </p>
              </TagsInfo>
            </div>
            <div>
              <NumberTags>
                <span id="tag11">11</span>
                근저당권자1 정보
              </NumberTags>
              <TagsInfo>
                <p>
                  이재현 671108-****** <br />
                  의왕시 내손중앙로 11, 1106동 603호
                </p>
              </TagsInfo>
            </div>
            <div>
              <NumberTags>
                <span id="tag12">12</span>
                근저당권자2 정보
              </NumberTags>
              <TagsInfo>
                <p>
                  이재현 671108-****** <br />
                  의왕시 내손중앙로 11, 1106동 603호
                </p>
              </TagsInfo>
            </div>
          </NumberTagsWrap>
        </Container>
      )}

      <ButtonWrap>
        <button type="button" onClick={() => pageSwitchFn('prev')}>
          뒤로가기
        </button>
        {page[2] === true ? (
          <button type="button">해석하기</button>
        ) : (
          <button type="button" onClick={() => pageSwitchFn('next')}>
            다음으로
          </button>
        )}
      </ButtonWrap>

      <BottomBeaner>
        <p>등기부등본이 없으신가요?</p>
        <Link to="/">등기부등본 발급 받으러가기</Link>
      </BottomBeaner>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 1030px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 130px;
`;

const TableContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  font-size: 12px;
  margin-bottom: 40px;

  table {
    width: 100%;
    text-align: center;
    border: 1px solid #000;

    & thead tr:first-of-type {
      background: #d9d9d9;
      font-size: 32px;
      text-align: left;

      th {
        padding-left: 50px;
      }
      span {
        font-size: 26px;
        margin-left: 50px;
      }
    }
    .non-bg {
      background: transparent !important;
      text-align: center !important;

      th,
      span {
        padding: 0 !important;
        margin: 0 !important;
      }
    }
    thead tr {
      height: 55px;
      line-height: 55px;
      font-size: 20px;
    }

    th,
    td {
      border: 1px solid #000;
      vertical-align: middle;
    }

    td p {
      margin: 10px auto;
    }
  }
`;

const NumberTags = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-size: 18px;
  font-weight: 600;
  min-height: 100px;
  max-width: 400px;

  span {
    display: inline-block;
    width: 25px;
    height: 25px;
    background: #4258d7;
    border-radius: 50%;
    line-height: 25px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    margin: 0 10px;
    color: #fff;
  }
`;

const TagsInfo = styled.div`
  width: 100% !important;
  padding: 0 20px 0 45px;

  p {
    background: #f5f6fa;
    border-radius: 10px;
    padding: 15px;
    line-height: 1.5;
  }
`;

const NumberTagsWrap = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 110px 0 70px;

  & > div {
    width: 50%;
    margin-bottom: 30px;

    p {
      justify-content: start;
      min-height: 40px;
      font-size: 20px;
    }
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1029px;
  margin-bottom: 200px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(50% - 7.5px);
    height: 60px;
    border-radius: 12px;
    font-size: 20px;
    font-weight: 600;
  }

  button:first-of-type {
    color: #425bd7;
    border: 1px solid #425bd7;
    background-color: #fff;
  }

  button:last-of-type {
    color: #fff;
    border: 1px solid #fff;
    background-color: #425bd7;
  }
`;

const BottomBeaner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1029px;
  height: 120px;
  margin: 0 auto 110px;
  padding: 30px 60px;
  background-color: #d5daf6;
  border-radius: 20px;

  p {
    font-size: 24px;
    font-weight: 600;
  }

  a {
    display: block;
    font-size: 18px;
  }
`;

export default InfoCheckPage;
