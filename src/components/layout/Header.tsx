import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderWrap>
      <div>
        <Link to="/">logo</Link>
        <Link to="/">등기부등본업로드</Link>
        <Link to="/">추가정보 확인하기</Link>
      </div>
      <div>
        <Link to="/">고객센터</Link>
      </div>
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #f0f4ff;
  color: black;
  box-shadow: 0 5px 10px 10px rgba(0, 0, 0, 0.2);
  a {
    display: inline-block;
    margin: 10px 5px;
    padding: 10px 5px;
    text-decoration: none;
    color: black;
    &:hover {
      color: gray;
    }
  }
`;
