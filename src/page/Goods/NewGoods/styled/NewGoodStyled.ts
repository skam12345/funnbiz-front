import { View } from 'react-native';
import styled from 'styled-components';
import { d_height } from '../../../../config/constant';

export const NewGoodsContainerBoxCSS = styled(View)`
  width: 100%;
  height: ${d_height * 0.56}px;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
