import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components';
import styles from 'styled-components/native';

export const CalendarConditionCSS = styles.View`
  height: 100%;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;

export const CalendarConditionIconCSS = styled(Icon)``;

export const CalendarConditionTextCSS = styled(Text)`
  margin-top: -5px;
  font-size: 18px;
  font-weight: 500;
`;
