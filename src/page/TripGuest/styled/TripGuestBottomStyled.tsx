import { Text, View } from 'react-native';
import styled from 'styled-components';
import styles from 'styled-components/native';

export const TripGuestBottomCSS = styled(View)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 130px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TripGuestBottomButtonCSS = styles.TouchableOpacity`
    width: 100%;
    height: 55px;
    background-color: #6866F7;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const TripGuestBottomButtonTextCSS = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;
