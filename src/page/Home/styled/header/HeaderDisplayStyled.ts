import {Text, View} from 'react-native';
import styled from 'styled-components';

export const HeaderComponentCSS = styled(View)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 55px;
  display: flex;
  flex-direction: row;
  padding-left: 5%;
  padding-right: 5%;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
`;

export const HeaderInComponentCSS = styled(Text)`
  width: 120px;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 29px;
  font-weight: bold;
  color: #000000;
`;

export const IconBoxCSS = styled(View)`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
