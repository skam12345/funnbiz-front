import {View, Text} from 'react-native';
import styled from 'styled-components';

export const TitleContainerBoxCSS = styled(View)`
  width: 100%;
  height: 65px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const TitleContainerTitleText = styled(Text)`
  font-size: 22px;
  font-weight: bold;
  color: black;
`;

export const TitleContainerSubject = styled(Text)`
  font-size: 15px;
  font-weight: 500;
  color: black;
`;
