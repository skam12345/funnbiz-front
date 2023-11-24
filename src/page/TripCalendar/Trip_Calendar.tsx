import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react';
import { LayoutContext } from '../../Store/context/AppHeaderContext';
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
  const headers = useContext(LayoutContext);
  useEffect(() => {
    if (!empty(headers.success)) {
      headers.setSuccess(false);
      headers.setStartDate('');
      headers.setEndDate('');
      headers.setStartDay('');
      headers.setEndDay('');
      headers.setCheckIn('');
      headers.setCheckOut('');
      headers.setMarked(weekendSet);
      headers.setObjectItem(weekendSet);
    }
  }, [headers.success]);
  const putSelectedItem = (key: string, day: any) => {
    let marking = headers.objectItem;
    marking[day?.dateString] = {
      [key === 'start' ? 'startingDay' : 'endingDay']: true,
      color: 'blue',
      textColor: 'white',
    };
    headers.setObjectItem(marking);
    if (key === 'start') headers.setMarked(headers.objectItem);
  };

  const putAutoRange = (day: any) => {
    let curDate = new Date(headers.startDate);
    let count = 0;
    curDate.setDate(curDate.getDate() + 1);
    let item = headers.objectItem;
    while (curDate < new Date(day?.dateString)) {
      item[curDate.toISOString().split('T')[0]] = {
        color: '#6C74FF',
        textColor: 'white',
      };
      curDate.setDate(curDate.getDate() + 1);
      count++;
    }
    headers.setNight(count + 1);
    headers.setObjectItem(item);
    headers.setMarked(headers.objectItem);
  };

  const selectRangCallback = (day: any) => {
    if (empty(headers.startDate)) {
      headers.setStartDate(day?.dateString);
      headers.setCheckIn(
        day.month < 10
          ? '0' + day.month + (day.day < 10 ? '.0' + day.day : day.day)
          : day.month + '.' + day.day,
      );
      putSelectedItem('start', day);
      let curDate = new Date(day?.dateString);
      switch (curDate.getDay()) {
        case 0:
          headers.setStartDay('일');
          break;
        case 1:
          headers.setStartDay('월');
          break;
        case 2:
          headers.setStartDay('화');
          break;
        case 3:
          headers.setStartDay('수');
          break;
        case 4:
          headers.setStartDay('목');
          break;
        case 5:
          headers.setStartDay('금');
          break;
        default:
          headers.setStartDay('토');
      }
      curDate.setDate(curDate.getDate() + 9);
      headers.setMax(curDate.toISOString().split('T')[0]);
    } else {
      headers.setEndDate(day?.dateString);
      let curDate = new Date(day?.dateString);
      headers.setCheckOut(
        day.month < 10
          ? '0' + day.month + (day.day < 10 ? '.0' + day.day : day.day)
          : day.month + '.' + day.day,
      );
      switch (curDate.getDay()) {
        case 0:
          headers.setEndDay('일');
          break;
        case 1:
          headers.setEndDay('월');
          break;
        case 2:
          headers.setEndDay('화');
          break;
        case 3:
          headers.setEndDay('수');
          break;
        case 4:
          headers.setEndDay('목');
          break;
        case 5:
          headers.setEndDay('금');
          break;
        default:
          headers.setEndDay('토');
      }
      putAutoRange(day);
      putSelectedItem('end', day);
      headers.setMax('');
    }
  };

  const onDayPress = (day: any) => {
    if (!empty(headers.startDate && !empty(headers.endDate))) {
      headers.setSuccess(true);
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
        markedDates={headers.marked}
        current={new Date().toDateString()}
        pastScrollRange={0}
        futureScrollRange={2}
        scrollEnabled={true}
        minDate={new Date().toISOString().split('T')[0]}
        maxDate={headers.maxDate}
      />
      {!empty(headers.startDate) && !empty(headers.endDate) ? (
        <TripCalendarListSelectedContainerCSS>
          <TripCalendarListSelectedButtonCSS onPress={selectedButtonPress}>
            <TripCalendarListSelectedButtonTextCSS>{`${headers.startDate}(${headers.startDay}) ~ ${headers.endDate}(${headers.endDay}) · ${headers.night}박`}</TripCalendarListSelectedButtonTextCSS>
          </TripCalendarListSelectedButtonCSS>
        </TripCalendarListSelectedContainerCSS>
      ) : (
        <></>
      )}
    </TripCalendarContianerCSS>
  );
};

export default TripCalendar;
