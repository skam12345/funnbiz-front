import { View } from 'react-native';
import styled from 'styled-components';
import { d_height } from '../../../config/constant';

export const TripGuestContainerCSS = styled(View)`
  width: 100%;
  height: ${d_height * 1.0}px;
  display: 'flex';
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
`;
