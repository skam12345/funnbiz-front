import {Text} from 'react-native';
import {
  FixedBoxCSS,
  FunCircleCSS,
  CenterCirlceCSS,
  ArrowCircleCSS,
  FixedTextCSS,
  NewNotiCSS,
  NewTextCSS,
} from '../../styled/fixed/FixedDisplayStyled';
import Icon from 'react-native-vector-icons/MaterialIcons';

const FixedDisplay: React.FC<FixedProps> = () => {
  return (
    <FixedBoxCSS>
      <FunCircleCSS>
        <Icon name="notifications" size={25} color="white" />
        <FixedTextCSS>펀소식</FixedTextCSS>
        <NewNotiCSS>
          <NewTextCSS>N</NewTextCSS>
        </NewNotiCSS>
      </FunCircleCSS>
      <CenterCirlceCSS>
        <Icon name="headset-mic" size={25} color="white" />
        <FixedTextCSS>고객센터</FixedTextCSS>
      </CenterCirlceCSS>
      <ArrowCircleCSS>
        <Icon name="arrow-upward" size={45} color="white" />
      </ArrowCircleCSS>
    </FixedBoxCSS>
  );
};

export default FixedDisplay;
