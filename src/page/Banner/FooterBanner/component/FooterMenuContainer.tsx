import React from 'react';
import {
  FooterMenuContainerCSS,
  FooterMenuTextCSS,
} from '../styled/FooterMenuContainerStyled';

const FooterMenuContainer = () => {
  return (
    <FooterMenuContainerCSS>
      <FooterMenuTextCSS>회사소개</FooterMenuTextCSS>
      <FooterMenuTextCSS>│</FooterMenuTextCSS>
      <FooterMenuTextCSS>찾아오시는길</FooterMenuTextCSS>
      <FooterMenuTextCSS>│</FooterMenuTextCSS>
      <FooterMenuTextCSS>서비스이용약관</FooterMenuTextCSS>
      <FooterMenuTextCSS>│</FooterMenuTextCSS>
      <FooterMenuTextCSS>개인정보처리방침</FooterMenuTextCSS>
    </FooterMenuContainerCSS>
  );
};

export default FooterMenuContainer;
