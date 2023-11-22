import { Pressable, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components';
import { d_height } from '../../../../config/constant';

export const AroundSearchCSS = styled(View)`
  width: 100%;
  height: ${d_height * 0.08}px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
`;

export const AroundSearchContentCSS = styled(Pressable)`
  width: 100%;
  height: 70%;
  border-radius: 8px;
  border: 1px solid #726b6b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AroundSearchContentBoxCSS = styled(View)`
  width: 60%;
  height: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const AroundSearchContentIconCSS = styled(Icon)``;

export const AroundSearchContentTextCSS = styled(Text)`
  font-size: 18px;
  font-weight: 300;
  color: black;
`;
