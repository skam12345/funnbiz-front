import { View } from 'react-native';
import styled from 'styled-components';
import { d_height } from '../../../../config/constant';

export const SearchBoxCSS = styled(View)`
  width: 100%;
  height: ${d_height * 0.2}px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
