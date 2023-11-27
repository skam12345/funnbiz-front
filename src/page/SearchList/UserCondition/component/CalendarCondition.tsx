import React, { useContext } from 'react';
import { CalendarContext } from '../../../../Store/context/AppSearchCalendarContext';
import {
  CalendarConditionCSS,
  CalendarConditionIconCSS,
  CalendarConditionTextCSS,
} from '../styled/CalendarConditionStyled';

const CalendarCondition = () => {
  const calendar = useContext(CalendarContext);
  return (
    <CalendarConditionCSS style={{ width: 18 * 11.5 }}>
      <CalendarConditionIconCSS name="calendar-month" size={26} color="black" />
      <CalendarConditionTextCSS>
        {calendar.checkIn}~{calendar.checkOut}, {calendar.night}박
      </CalendarConditionTextCSS>
    </CalendarConditionCSS>
  );
};

export default CalendarCondition;
