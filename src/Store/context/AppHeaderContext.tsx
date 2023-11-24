// 레이아웃 관련 useContext 사용하여 State 관리
// 현재 탭스크린 헤더와, 메인 헤더 관리 중.
import React, { ReactNode, createContext, useState } from 'react';
import { weekendSet } from '../../config/constant';

const LayoutContext = createContext({});

interface LayoutProviderProps {
  children: ReactNode;
}

const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const [visibleMain, setVisibleMain] = useState(true);
  const [visibleTabHead, setVisibleTabHead] = useState(false);
  const [visibleCalHead, setVisibleCalHead] = useState(false);

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

  // 인원 수 선택 제어 Context state hook 변수들
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);
  const [adultStyle, setAdultStyle] = useState({
    backgroundColor: 'grey',
  });
  const [childStyle, setChildStyle] = useState({
    backgroundColor: 'grey',
  });
  const [buttonStyle, setButtonStyle] = useState({
    backgroundColor: 'grey',
  });

  const contextValue = {
    visibleMain,
    setVisibleMain,
    visibleTabHead,
    setVisibleTabHead,
    visibleCalHead,
    setVisibleCalHead,
    //달력
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
    // 인원 수 선택
    adult,
    setAdult,
    child,
    setChild,
    adultStyle,
    setAdultStyle,
    childStyle,
    setChildStyle,
    buttonStyle,
    setButtonStyle,
  };

  return (
    <LayoutContext.Provider value={contextValue}>
      {children}
    </LayoutContext.Provider>
  );
};

export { LayoutContext, LayoutProvider };
