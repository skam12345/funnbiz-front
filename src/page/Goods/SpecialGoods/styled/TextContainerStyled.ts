import { Text, View } from 'react-native';
import styled from 'styled-components';

export const TextContainerBoxCSS = styled(View)`
  width: 100%;
  height: 65px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const TextContainerTextCSS = styled(Text)`
  font-size: 22px;
  font-weight: bold;
  color: black;
`;

export const TextContainerTitleSubjectCSS = styled(Text)`
  font-size: 15px;
  font-weight: 200;
  color: black;
`;
