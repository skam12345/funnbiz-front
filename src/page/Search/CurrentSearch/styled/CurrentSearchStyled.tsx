import { Text, View } from 'react-native';
import styled from 'styled-components';
import styles from 'styled-components/native';
import { d_height } from '../../../../config/constant';

export const CurrentSearchCSS = styled(View)`
  width: 100%;
  height: ${d_height * 0.18}px;
  background-color: white;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const CurrentSearchTextCSS = styled(Text)`
  font-size: 16px;
  font-weight: 900;
  color: black;
`;

export const CurrentSearchRollingViewCSS = styled(View)`
  width: 100%;
  height: 100px;
  margin-top: 15px;
  margin-bottom: 8px;
`;

export const CurrentSearchContentDataContainerCSS = styles.View`
  width: 160px;
  height: 80px;
  border-radius: 8px;
  padding-left: 15px;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin-right: 10px;
`;

export const CurrentSearchContentDataLodgeCSS = styled(Text)`
  font-size: 15px;
  font-weight: 500;
  color: black;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CurrentSearchContentDataTextBoxCSS = styled(View)`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CurrentSearchContentDataTextCSS = styled(Text)`
  font-size: 13px;
  font-weight: 400;
  color: black;
`;

export const CurrentSearchContentDataCloseBoxCSS = styles.Pressable`
  position: absolute;
  right: 5px;
  width: 25px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CurrentSearchContentDataCloseTextCSS = styled(Text)`
  font-size: 30px;
  font-weight: 100;
  color: black;
  margin-top: -15px;
`;
