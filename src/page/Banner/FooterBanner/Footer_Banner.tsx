import React from 'react';
import FirstTextContainer from './component/FirstTextContainer';
import FooterMenuContainer from './component/FooterMenuContainer';
import IntroduceContainer from './component/IntroduceContainer';
import PhoneBoxContainer from './component/PhoneBoxContainer';
import {
  FooterBannerContainerCSS,
  FooterContainContainerCSS,
} from './styled/FooterBannerStyled';

const FooterBanner = () => {
  return (
    <FooterBannerContainerCSS>
      <FooterContainContainerCSS>
        <FirstTextContainer />
        <PhoneBoxContainer />
        <FooterMenuContainer />
        <IntroduceContainer />
      </FooterContainContainerCSS>
    </FooterBannerContainerCSS>
  );
};

export default FooterBanner;
