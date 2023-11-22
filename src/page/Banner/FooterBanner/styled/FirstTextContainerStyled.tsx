import styled from 'styled-components';

import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const FirstTextContainerTextBoxCSS = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const FirstTextContainerLeftBoxCSS = styled(View)`
  width: 60px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-right: 30px;
`;

export const FirstTextContainerLeftCircleCSS = styled(View)`
  width: 25px;
  height: 25px;
  border-radius: 100px;
  background-color: #e2e2e2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FirstTextContainerLeftIconCSS = styled(Icon)`
  font-size: 15px;
  color: black;
`;

export const FirstTextContainerLeftTextCSS = styled(Text)`
  font-size: 15px;
  font-weight: 500;
  color: black;
`;

export const FirstTextContainerRightTextCSS = styled(Text)`
  font-size: 11px;
  font-weight: 300;
  color: black;
`;
