import {View} from 'react-native';
import {
  TitleContainerBoxCSS,
  TitleContainerSubject,
  TitleContainerTitleText,
} from '../styled/TitleContainerStyled';

const TitleContainer = () => {
  return (
    <TitleContainerBoxCSS>
      <TitleContainerTitleText>펀비즈 신규상품</TitleContainerTitleText>
      <TitleContainerSubject>
        국내 정상급 시설에서 즐거운 여행을 시작해보세요.
      </TitleContainerSubject>
    </TitleContainerBoxCSS>
  );
};

export default TitleContainer;
