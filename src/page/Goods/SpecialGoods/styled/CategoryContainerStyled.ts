import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components';

export const CategoryCntainerBoxCSS = styled(View)`
  width: 100%;
  height: 28px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const CategoryCntainerEntCSS = styled(View)`
  width: 65px;
  height: 100%;
  background-color: #6866f7;
  border-radius: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const CategoryContainerFinishCSS = styled(View)`
  width: 80px;
  height: 100%;
  background-color: white;
  border: 1px solid #c9c9c9;
  border-radius: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const CategoryContainerPromotionCSS = styled(View)`
  width: 90px;
  height: 100%;
  background-color: white;
  border: 1px solid #c9c9c9;
  border-radius: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CategoryCntainerTextCSS = styled(Text)`
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 3px;
`;

export const CategoryContainerIcon = styled(Icon)`
  margin-left: 5px;
`;
