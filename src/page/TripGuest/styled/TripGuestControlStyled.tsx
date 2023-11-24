import { Text, View } from 'react-native';
import { styled } from 'styled-components';
import styles from 'styled-components/native';

export const TripGuestControlTotalContainerCSS = styled(View)`
  width: 100%;
  height: 122px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const TripGuestControlContainerCSS = styled(View)`
  width: 100%;
  height: 56px;
  background-color: white;
  border-radius: 8px;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TripGuestAgeTextCSS = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  color: black;
`;

export const TripGuestControlPartContainerCSS = styled(View)`
  width: 35%;
  height: 45px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TripGuestControlPartButtonCSS = styles.TouchableOpacity`
    width: 35px;
    height: 35px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const TripGuestControlPartButtenTextCSS = styled(Text)`
  font-size: 23px;
  font-weight: 900;
  color: white;
`;

export const TripGuestControlPartButtonNumberCSS = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  color: black;
`;
