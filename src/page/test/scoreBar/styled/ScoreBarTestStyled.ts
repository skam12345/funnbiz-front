import { View } from 'react-native';
import styled from 'styled-components';
import { d_height } from '../../../../config/constant';

export const ScoreBarTestContainerCSS = styled(View)`
  width: 100%;
  height: ${d_height * 1.0}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ScoreBarTestCSS = styled(View)`
  width: 15px;
  height: 65px;
  background-color: #b1b1b1;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
