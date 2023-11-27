import { View } from 'react-native';
import styled from 'styled-components';
import { d_height } from '../../../config/constant';

export const SearchListCSS = styled(View)`
  width: 100%;
  height: ${d_height * 1.0}px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-left: 15px;
`;
