import { View } from 'react-native';
import styled from 'styled-components';
import { d_height } from '../../../../config/constant';

export const FooterBannerContainerCSS = styled(View)`
  width: 100%;
  height: ${d_height * 0.4}px;
  background-color: #f7f7f7;
  padding-top: 50px;
  padding-left: 18px;
  padding-right: 18px;
  padding-bottom: 60px;
`;

export const FooterContainContainerCSS = styled(View)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
