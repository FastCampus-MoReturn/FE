import styled from '@emotion/styled';
import React from 'react';

const Footer = () => {
  return (
    <FooterWrap>
      <p>Footer 영역</p>
    </FooterWrap>
  );
};

export default Footer;

const FooterWrap = styled.div`
  padding: 70px 0;
  width: 100%;
  background-color: #f0f4ff;
  color: black;
  text-align: center;
`;
