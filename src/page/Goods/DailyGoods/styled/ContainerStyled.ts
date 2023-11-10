import { View } from 'react-native';
import styled from 'styled-components';
import { d_height } from '../../../../config/constant';

export const DailyGoodsContainerCSS = styled(View)`
  width: 100%;
  height: ${d_height * 0.45}px;
  background-color: #3d3945;
  padding-top: 38px;
  padding-bottom: 38px;
  padding-left: 22px;
  padding-right: 22px;
`;

export const GoodsContentContainerCSS = styled(View)`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
