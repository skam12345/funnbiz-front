import React, { ReactNode, createContext, useState } from 'react';
import { weekendSet } from '../../config/constant';

const CalendarContext = createContext({});

interface LayoutProviderProps {
  children: ReactNode;
}

const CalendarProvider = ({ children }: LayoutProviderProps) => {
  // 검색 달력 Context state hook 변수들
  const [first, setFirst] = useState(true);
  const [marked, setMarked] = useState(weekendSet);
  const [maxDate, setMax] = useState('');
  const [startDate, setStartDate] = useState('');
  const [checkIn, setCheckIn] = useState('11-05');
  const [checkOut, setCheckOut] = useState('11-06');
  const [endDate, setEndDate] = useState('');
  const [objectItem, setObjectItem] = useState(weekendSet);
  const [success, setSuccess] = useState(false);
  const [startDay, setStartDay] = useState('');
  const [endDay, setEndDay] = useState('');
  const [night, setNight] = useState(0);
  const contextValue = {
    marked,
    setMarked,
    maxDate,
    setMax,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    objectItem,
    setObjectItem,
    success,
    setSuccess,
    first,
    setFirst,
    startDay,
    setStartDay,
    endDay,
    setEndDay,
    night,
    setNight,
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
  };

  return (
    <CalendarContext.Provider value={contextValue}>
      {children}
    </CalendarContext.Provider>
  );
};

export { CalendarContext, CalendarProvider };
