import React from 'react';
import {
  TextContainerBoxCSS,
  TextContainerTextCSS,
  TextContainerTitleSubjectCSS,
} from '../styled/TextContainerStyled';

const TextContainer = () => {
  return (
    <>
      <TextContainerBoxCSS>
        <TextContainerTextCSS>펀비즈 특별 상품</TextContainerTextCSS>
        <TextContainerTitleSubjectCSS>
          국내 정상급 시설에서 즐거운 여행을 시작해보세요.
        </TextContainerTitleSubjectCSS>
      </TextContainerBoxCSS>
    </>
  );
};

export default TextContainer;
