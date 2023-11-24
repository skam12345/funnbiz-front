import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react';
import { LayoutContext } from '../../Store/context/AppHeaderContext';
import { CalendarContext } from '../../Store/context/AppSearchCalendarContext';
import { empty, weekendSet } from '../../config/constant';
import {
  TripCalendarContianerCSS,
  TripCalendarListCSS,
  TripCalendarListSelectedButtonCSS,
  TripCalendarListSelectedButtonTextCSS,
  TripCalendarListSelectedContainerCSS,
} from './styled/TripCalendarStyled';

const TripCalendar = () => {
  const navigation = useNavigation();
  const calendar = useContext(CalendarContext);
  const headers = useContext(LayoutContext);
  useEffect(() => {
    initialize();
  }, [calendar.success]);
  const initialize = () => {
    if (!empty(calendar.success)) {
      calendar.setSuccess(false);
      calendar.setStartDate('');
      calendar.setEndDate('');
      calendar.setStartDay('');
      calendar.setEndDay('');
      calendar.setCheckIn('');
      calendar.setCheckOut('');
      calendar.setMarked(weekendSet);
      calendar.setObjectItem(weekendSet);
    }
  };
  const putSelectedItem = (key: string, day: any) => {
    let marking = calendar.objectItem;
    marking[day?.dateString] = {
      [key === 'start' ? 'startingDay' : 'endingDay']: true,
      color: 'blue',
      textColor: 'white',
    };
    calendar.setObjectItem(marking);
    if (key === 'start') calendar.setMarked(calendar.objectItem);
  };

  const putAutoRange = (day: any) => {
    let curDate = new Date(calendar.startDate);
    let count = 0;
    curDate.setDate(curDate.getDate() + 1);
    let item = calendar.objectItem;
    while (curDate < new Date(day?.dateString)) {
      item[curDate.toISOString().split('T')[0]] = {
        color: '#6C74FF',
        textColor: 'white',
      };
      curDate.setDate(curDate.getDate() + 1);
      count++;
    }
    calendar.setNight(count + 1);
    calendar.setObjectItem(item);
    calendar.setMarked(calendar.objectItem);
  };

  const setDay = (curDate: Date, key: string) => {
    if (key === 'start') {
      switch (curDate.getDay()) {
        case 0:
          calendar.setStartDay('일');
          break;
        case 1:
          calendar.setStartDay('월');
          break;
        case 2:
          calendar.setStartDay('화');
          break;
        case 3:
          calendar.setStartDay('수');
          break;
        case 4:
          calendar.setStartDay('목');
          break;
        case 5:
          calendar.setStartDay('금');
          break;
        default:
          calendar.setStartDay('토');
      }
    } else if (key === 'end') {
      switch (curDate.getDay()) {
        case 0:
          calendar.setEndDay('일');
          break;
        case 1:
          calendar.setEndDay('월');
          break;
        case 2:
          calendar.setEndDay('화');
          break;
        case 3:
          calendar.setEndDay('수');
          break;
        case 4:
          calendar.setEndDay('목');
          break;
        case 5:
          calendar.setEndDay('금');
          break;
        default:
          calendar.setEndDay('토');
      }
    }
  };

  const settingDate = (day: any) => {
    return day.month < 10
      ? '0' + day.month + (day.day < 10 ? '.0' + day.day : day.day)
      : day.month + '.' + day.day;
  };

  const selectRangCallback = (day: any) => {
    if (empty(calendar.startDate)) {
      calendar.setStartDate(day?.dateString);
      calendar.setCheckIn(settingDate(day));
      putSelectedItem('start', day);
      let curDate = new Date(day?.dateString);
      setDay(curDate, 'start');
      curDate.setDate(curDate.getDate() + 9);
      calendar.setMax(curDate.toISOString().split('T')[0]);
    } else {
      calendar.setEndDate(day?.dateString);
      let curDate = new Date(day?.dateString);
      calendar.setCheckOut(settingDate(day));
      setDay(curDate, 'end');
      putAutoRange(day);
      putSelectedItem('end', day);
      calendar.setMax('');
    }
  };

  const onDayPress = (day: any) => {
    if (!empty(calendar.startDate && !empty(calendar.endDate))) {
      calendar.setSuccess(true);
    } else {
      selectRangCallback(day);
    }
  };

  const selectedButtonPress = () => {
    headers.setVisibleTabHead(true);
    headers.setVisibleCalHead(false);
    navigation.navigate('Search');
  };
  return (
    <TripCalendarContianerCSS>
      <TripCalendarListCSS
        theme={{
          textMonthFontSize: 24,
          extMonthFontWeight: 'bold',
          todayTextColor: 'orange',
          'stylesheet.calendar.header': {
            dayTextAtIndex0: {
              color: 'red',
            },
            dayTextAtIndex1: {
              color: 'black',
            },
            dayTextAtIndex2: {
              color: 'black',
            },
            dayTextAtIndex3: {
              color: 'black',
            },
            dayTextAtIndex4: {
              color: 'black',
            },
            dayTextAtIndex5: {
              color: 'black',
            },
            dayTextAtIndex6: {
              color: 'blue',
            },
          },
        }}
        onDayPress={onDayPress}
        markingType="period"
        markedDates={calendar.marked}
        current={new Date().toDateString()}
        pastScrollRange={0}
        futureScrollRange={2}
        scrollEnabled={true}
        minDate={new Date().toISOString().split('T')[0]}
        maxDate={calendar.maxDate}
      />
      {!empty(calendar.startDate) && !empty(calendar.endDate) ? (
        <TripCalendarListSelectedContainerCSS>
          <TripCalendarListSelectedButtonCSS onPress={selectedButtonPress}>
            <TripCalendarListSelectedButtonTextCSS>{`${calendar.startDate}(${calendar.startDay}) ~ ${calendar.endDate}(${calendar.endDay}) · ${calendar.night}박`}</TripCalendarListSelectedButtonTextCSS>
          </TripCalendarListSelectedButtonCSS>
        </TripCalendarListSelectedContainerCSS>
      ) : (
        <></>
      )}
    </TripCalendarContianerCSS>
  );
};

export default TripCalendar;
