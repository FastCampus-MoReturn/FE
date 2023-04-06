import styled from '@emotion/styled';
import { useState } from 'react';

const ResultInfo = () => {
  const [search, setSearch] = useState(true);
  const [view, setView] = useState();

  return (
    <>
      <SearchForm>
        <ConsonantButton>
          <p className="sub-title">
            찾고자 하는 용어의 일부 단어나 한글 자음을 누르셔도 용어 검색이 가능합니다.
          </p>
          <p>가나다로 검색</p>
          <div>
            <button type="button">가</button>
            <button type="button">나</button>
            <button type="button">다</button>
            <button type="button">라</button>
            <button type="button">마</button>
            <button type="button">바</button>
            <button type="button">사</button>
            <button type="button">아</button>
            <button type="button">자</button>
            <button type="button">차</button>
            <button type="button">카</button>
            <button type="button">타</button>
            <button type="button">파</button>
            <button type="button">하</button>
          </div>
        </ConsonantButton>

        <SearchInput>
          <p>단어로 검색</p>
          <div>
            <input type="text" />
            <button type="button">검색</button>
          </div>
        </SearchInput>
      </SearchForm>

      {search && (
        <ResultWrap>
          <p>
            전체 <span>1건</span>, 현제페이지 <span>1/1</span>
          </p>

          <div>
            <ul>
              <li>몰라일단 적어놓자</li>
              <li>몰라일단 적어놓자</li>
              <li>몰라일단 적어놓자</li>
            </ul>
            <ul>
              <li>몰라일단 적어놓는 title </li>
              <li>몰라일단 적어놓는 content</li>
            </ul>
          </div>
        </ResultWrap>
      )}
    </>
  );
};

const SearchForm = styled.div`
  width: 100%;
  border-radius: 20px;
  background-color: #f5f6fa;
  padding: 60px 130px;
`;

const ConsonantButton = styled.div`
  p {
    font-size: 24px;
    font-weight: 500;
    color: #505050;
  }

  .sub-title {
    font-weight: 400;
    color: #505050;
    text-align: center;
    margin-bottom: 40px;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin: 20px 0 40px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 10px;
    font-size: 24px;
    font-weight: 500;
    background-color: #fff;
    color: #171717;
    border: 1px solid #d2d2dc;
    letter-spacing: -0.05em;
    font-family: Pretendard Variable;
  }
`;

const SearchInput = styled.div`
  p {
    font-weight: 500;
    font-size: 24px;
    color: #505050;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  input {
    width: 828px;
    heigth: 50px;
    border: 1px solid #d2d2dc;
    border-radius: 10px;
    background-color: #fff;
  }

  input:focus {
    outline: none;
    border: 2px solid #4258d7;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 50px;
    border-radius: 10px;
    background-color: #4258d7;
    border: none;
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    letter-spacing: -0.05em;
    font-family: Pretendard Variable;
  }
`;

const ResultWrap = styled.div`
  p {
    display: inline-block;
    margin: 50px 0 0 40px;
    padding: 0 40px 5px 0;
    border-bottom: 1px solid #000;
    color: #171717;
    font-size: 18px;

    span {
      color: #425bd7;
      font-weight: 500;
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 20px;
    margin-top: 115px;

    ul {
      height: 780px;
      border: 1px solid #d2d2dc;
      border-radius: 20px;
      font-size: 24px;
      overflow: hidden;

      li {
        display: flex;
        align-items: center;
        height: 87px;
        padding: 0 45px;
      }
    }

    ul:first-of-type {
      width: 345px;
    }

    ul:last-of-type {
      width: 100%;

      li:first-of-type {
        background-color: #f0f4ff;
        font-size: 30px;
        font-weight: 500;
        color: #4258d7;
      }
    }
  }
`;

export default ResultInfo;
