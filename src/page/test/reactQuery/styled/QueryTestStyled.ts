import { Pressable, ScrollView, Text, View } from 'react-native';
import styled from 'styled-components';
import { d_height } from '../../../../config/constant';

export const QueryBlankTextCSS = styled(Text)`
  font-size: 15px;
  color: black;
`;

export const QueryScrollViewCSS = styled(ScrollView)`
  width: 100%;
  height: ${d_height * 1.0}px;
`;

export const QueryContainerCSS = styled(View)`
  width: 100%;
  height: ${d_height * 1.3}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const ContentBoxCSS = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const TextBoxCSS = styled(View)`
  display: flex;
  flex-direction: row;
`;

export const TitleTextCSS = styled(Text)`
  font-size: 13px;
  font-weight: bold;
  color: black;
  margin-left: 8px;
  margin-right: 8px;
`;

export const ContentTextCSS = styled(Text)`
  font-size: 13px;
  font-weight: 500;
  color: black;
`;

export const PressableCSS = styled(Pressable)`
  width: 120px;
  height: 45px;
  background-color: green;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const PressableTextCSS = styled(Text)`
  font-size: 15px;
  color: white;
`;
