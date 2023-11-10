import React from 'react';
import {
  DesignContainer,
  DesignText,
  IntroText,
  SubTitle,
  TopImagContentBoxCSS,
} from '../../styled/top/TopDisplayStyled';
interface textDesign {
  text: string;
  title: string;
  region: string;
  intro: string;
}
const ScrollImageContentComponent: React.FC<textDesign> = ({
  text,
  title,
  region,
  intro,
}) => {
  return (
    <>
      <TopImagContentBoxCSS>
        <DesignContainer>
          <DesignText style={{ fontSize: text.length > 4 ? 13 : 15 }}>
            {text}
          </DesignText>
        </DesignContainer>
        <SubTitle style={{ fontSize: 39 }}>{title}</SubTitle>
        <SubTitle style={{ fontSize: 39 }}>{region}</SubTitle>
        <IntroText>{intro}</IntroText>
      </TopImagContentBoxCSS>
    </>
  );
};

export default ScrollImageContentComponent;
