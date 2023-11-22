import { Text, View } from 'react-native';
import styled from 'styled-components';

export const PhoneBoxContainerCSS = styled(View)`
  width: 100%;
  height: 80px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-left: 14px;
  padding-right: 18px;
  margin-bottom: 15px;
`;

export const PhoneBoxContainerLeftRowBoxCSS = styled(View)`
  width: 43%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PhoneBoxContainerRightRowBoxCSS = styled(View)`
  width: 45%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PhoneBoxContainerTextBoxCSS = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PhoneBoxContainerBoldTextCSS = styled(Text)`
  font-size: 13px;
  font-weight: 500;
  color: black;
`;

export const PhoneBoxContainerContentTextCSS = styled(Text)`
  font-size: 13px;
  font-weight: 300;
  color: black;
`;
