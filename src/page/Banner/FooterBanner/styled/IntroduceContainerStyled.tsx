import { Text, View } from 'react-native';
import styled from 'styled-components';

export const IntroduceContainerCSS = styled(View)`
  width: 100%;
  height: 28%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const IntroduceContainerTextCSS = styled(Text)`
  font-size: 11.2px;
  font-weight: 400;
  color: #464242;
  margin-bottom: 5px;
`;
