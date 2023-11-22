import { Text, View } from 'react-native';
import styled from 'styled-components';
import { d_height } from '../../../../config/constant';

export const PopularSearchCSS = styled(View)`
  width: 100%;
  height: ${d_height * 0.24}px;
  background-color: white;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 13px;
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
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
