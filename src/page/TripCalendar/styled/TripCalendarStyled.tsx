import { ScrollView, View } from 'react-native';
import { CalendarList, LocaleConfig } from 'react-native-calendars';
import styled from 'styled-components';
import styles from 'styled-components/native';
import { d_height } from '../../../config/constant';

LocaleConfig.locales['fr'] = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  monthNamesShort: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  dayNames: [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  today: '오늘',
};

LocaleConfig.defaultLocale = 'fr';

export const TripCalendarCSS = styled(ScrollView)`
  width: 100%;
  height: ${d_height * 1.0}px;
`;
export const TripCalendarContianerCSS = styled(View)`
  width: 100%;
  height: ${d_height * 1.0}px;
`;
export const TripCalendarListCSS = styled(CalendarList)`
  width: 100%;
  height: ${d_height * 1.0}px;
`;

export const TripCalendarListSelectedContainerCSS = styled(View)`
  position: absolute;
  width: 100%;
  height: 180px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 999;
  bottom: 0;
`;

export const TripCalendarListSelectedButtonCSS = styles.TouchableOpacity`
  width: 90%;
  height: 55px;
  border-radius: 10px;
  background-color: #6C74FF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
`;

export const TripCalendarListSelectedButtonTextCSS = styles.Text`
  font-size: 17px;
  font-weight: bold;
  color: white;
`;
