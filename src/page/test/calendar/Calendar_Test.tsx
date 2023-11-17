import React, { useEffect, useState } from 'react';
import { empty } from '../../../config/constant';
import { Calendar } from './styled/CalendarTestStlyed';

const CalendarTest = () => {
  const [marked, setMarked] = useState({});
  const [maxDate, setMax] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [objectItem, setObjectItem] = useState({});
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!empty(success)) {
      setSuccess(false);
      setStartDate('');
      setEndDate('');
      setMarked({});
      setObjectItem({});
    }
  }, [success]);
  const putSelectedItem = (key: string, day: any) => {
    let marking = objectItem;
    marking[day?.dateString] = {
      [key === 'start' ? 'startingDay' : 'endingDay']: true,
      color: 'blue',
      textColor: 'white',
    };
    setObjectItem(marking);
    if (key === 'start') setMarked(objectItem);
  };

  const putAutoRange = (day: any) => {
    let curDate = new Date(startDate);
    curDate.setDate(curDate.getDate() + 1);
    let item = objectItem;
    while (curDate < new Date(day?.dateString)) {
      item[curDate.toISOString().split('T')[0]] = {
        color: '#6C74FF',
        textColor: 'white',
      };
      curDate.setDate(curDate.getDate() + 1);
    }
    setObjectItem(item);
    setMarked(objectItem);
  };

  const selectRangCallback = (day: any) => {
    if (empty(startDate)) {
      setStartDate(day?.dateString);
      putSelectedItem('start', day);
      let curDate = new Date(day?.dateString);
      curDate.setDate(curDate.getDate() + 9);
      setMax(curDate.toISOString().split('T')[0]);
    } else {
      setEndDate(day?.dateString);
      putAutoRange(day);
      putSelectedItem('end', day);
      setMax('');
    }
  };

  const onDayPress = (day: any) => {
    if (!empty(startDate && !empty(endDate))) {
      setSuccess(true);
    }
    selectRangCallback(day);
  };

  return (
    <Calendar
      onDayPress={onDayPress}
      markingType="period"
      markedDates={marked}
      current={new Date().toDateString()}
      pastScrollRange={0}
      futureScrollRange={2}
      scrollEnabled={true}
      minDate={new Date().toISOString().split('T')[0]}
      maxDate={maxDate}
    />
  );
};

export default CalendarTest;
