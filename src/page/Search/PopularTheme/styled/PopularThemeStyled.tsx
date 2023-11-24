import { Text, View } from 'react-native';
import styled from 'styled-components';
import styles from 'styled-components/native';
import { d_height } from '../../../../config/constant';

export const PopularThemeCSS = styled(View)`
  width: 100%;
  height: ${d_height * 0.09}px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 15px;
`;

export const PopularThemeTitleTextCSS = styled(Text)`
  font-size: 16px;
  font-weight: 900;
  color: black;
  margin-bottom: 8px;
`;

export const PopularThemeRollingBoxThemeListCSS = styled(View)`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const PopularThemeContentBox = styles.View`
  height: 30px;
  border: 1px solid grey;
  border-radius: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 5px;  
`;

export const PopularThemeContentText = styled(Text)`
  font-size: 14px;
  font-weight: 300;
  color: grey;
`;
