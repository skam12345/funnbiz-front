import { Image, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';

export const Contaniner = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TextCSS = styled(Text)`
  font-size: 30px;
`;

export const CustomBarButtonCSS = styled(View)`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: #6866f7;
`;

export const TouchOpacityCSS = styled(TouchableOpacity)`
  top: -18.5px;
  justify-content: center;
  align-items: center;
`;

export const BottomIconCSS = styled(Image)`
  width: 25px;
  height: 25px;
  tint-color: ${props => (props.focused ? '#e32f45' : '#748c94')};
`;

// 헤더 오퍼시티
export const HeaderLogoCSS = styled(View)`
  padding-left: 15px;
`;

export const HeaderRightCSS = styled(View)`
  display: flex;
  flex-direction: row;
`;
