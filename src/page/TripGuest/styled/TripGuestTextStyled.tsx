import { Text, View } from 'react-native';
import { styled } from 'styled-components';

export const TripGuestTextContainerCSS = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 25px;
  margin-bottom: 35px;
`;

export const TripGuestTextBoldCSS = styled(Text)`
  font-size: 16px;
  font-weight: 900;
  color: black;
`;

export const TripGuestTextCSS = styled(Text)`
  font-size: 16px;
  font-weight: 300;
  color: black;
`;
