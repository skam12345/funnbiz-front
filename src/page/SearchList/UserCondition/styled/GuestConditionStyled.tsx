import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components';
import styles from 'styled-components/native';

export const GuestConditionCSS = styles.View`
  height: 100%;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const GuestConditionIconCSS = styled(Icon)``;

export const GuestConditionTextCSS = styled(Text)`
  margin-top: -5px;
  font-size: 18px;
  font-weight: 500;
`;
