import { Text, View } from 'react-native';
import styled from 'styled-components';
import { d_height } from '../../../../config/constant';

export const PopularSearchCSS = styled(View)`
  width: 100%;
  height: ${d_height * 0.31}px;
  background-color: white;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 30px;
  padding-bottom: 13px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const PopularSearchTitleTextCSS = styled(Text)`
  font-size: 16px;
  font-weight: 900;
  color: black;
`;

export const PopularSearchListBoxCSS = styled(View)`
  width: 98%;
  height: 96%;
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const PopularSearchRowBoxCSS = styled(View)`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const PopularSearchRowContentBox = styled(View)`
  display: flex;
  flex-direction: row;
`;

export const PopularSearchGradeText = styled(Text)`
  font-size: 15px;
  font-weight: 900;
  color: gray;
  margin-right: 17px;
`;

export const PopularSearchGradeTenText = styled(Text)`
  font-size: 15px;
  font-weight: 900;
  color: gray;
  margin-right: 8px;
`;

export const PopularSearchGradeGreenText = styled(Text)`
  font-size: 15px;
  font-weight: 900;
  color: lightgreen;
  margin-right: 17px;
`;

export const PopularSearchWordText = styled(Text)`
  font-size: 15px;
  font-weight: 500;
  color: black;
`;
