import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Sidebar = () => {
  return (
    <SidebarWrap>
      <Link to="/">등기부등본 업로드</Link>
      <Link to="/">용어정리</Link>
      <Link to="/">이용안내</Link>
      <Link to="/">머니파킹 바로가기</Link>
      <Link to="/">menu5</Link>
      <Link to="/">menu6</Link>
    </SidebarWrap>
  );
};
export default Sidebar;

const SidebarWrap = styled.div`
  z-index: 1000;
  position: fixed;
  top: 30%;
  right: 40px;
  width: fit-content;
  max-width: 120px;
  height: fit-content;
  background-color: white;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 15px 0px rgba(0, 0, 0, 0.1);
  a {
    display: block;
    padding: 20px;
    border-bottom: 1px solid #ddd;
    text-decoration: none;
    color: gray;
    &:last-child {
      border: none;
    }
    &:hover {
      font-weight: bold;
      color: black;
    }
  }
`;
