import { ScrollView, View } from 'react-native';
import styled from 'styled-components';
import { d_height } from '../../../config/constant';

export const SearchScreenCSS = styled(ScrollView)`
  width: 100%;
  height: ${d_height * 1.5}px;
`;

export const SearchScreenLineCSS = styled(View)`
  width: 100%;
  height: 8px;
  background-color: #d4d4d4;
`;
