import { View } from 'react-native';
import styled from 'styled-components';
import { d_height } from '../../../../config/constant';

export const SpecialGoodsBoxCSS = styled(View)`
  width: 100%;
  height: ${d_height * 0.56}px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding-left: 24px;
`;
