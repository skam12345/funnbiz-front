import { View } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import styled from 'styled-components';
import { d_height } from '../../../../config/constant';

export const CalendarBox = styled(View)`
  width: 100%;
  height: ${d_height * 1.0}px;
`;

export const Calendar = styled(CalendarList)`
  width: 100%;
  height: ${d_height * 1.0}px;
`;
