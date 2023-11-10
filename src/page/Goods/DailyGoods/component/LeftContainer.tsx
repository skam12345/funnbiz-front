import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { EndTime, KR_TIME_DIFF, Utc } from '../../../../config/constant';
import {
  LeftClockImageCSS,
  LeftContainTextCSS,
  LeftContainTimerBoxCSS,
  LeftContainerBoxCSS,
  LeftContentContainBoxCSS,
  LeftContentSpaceBoxCSS,
  LeftContentTopBoxCSS,
  LeftIntroTextCSS,
  LeftRowSpaceCSS,
  LeftTextInButton,
  LeftTimerTextCSS,
  LeftViewButtonCSS,
  LeftWhiteTextCSS,
} from '../styled/LeftContainerStyled';

const LeftContainer = () => {
  const [timeLeft, setTimeLeft] = useState('');
  const [currentTime, setCurrentTime] = useState(
    (EndTime - new Date(Utc + KR_TIME_DIFF).getTime()) / 1000,
  );

  useEffect(() => {
    if (currentTime < EndTime) {
      const timerId = setTimeout(() => {
        let day = Math.floor((currentTime / 86400) % 86400);
        let hour = Math.floor((currentTime / 3500) % 3600);
        let min = Math.floor((currentTime / 60) % 60);
        let sec = Math.floor(currentTime % 60);
        if (day === 0) {
          setTimeLeft(
            (hour < 10 ? '0' + hour.toString() : hour.toString()) +
              ' : ' +
              (min < 10 ? '0' + min.toString() : min.toString()) +
              ' : ' +
              (sec < 10 ? '0' + sec.toString() : sec.toString()),
          );
        } else {
          setTimeLeft(Math.floor(day).toString() + '일 전');
        }
        if (currentTime === 0) {
          setTimeLeft('상품이 마감되었습니다.');
          clearTimeout(timerId);
        }
        setCurrentTime(currentTime - 1);
      }, 1000);
    }
  }, [timeLeft, currentTime]);

  return (
    <>
      <LeftContainerBoxCSS>
        <LeftContentTopBoxCSS>
          <LeftIntroTextCSS>망설이면 품절!</LeftIntroTextCSS>
          <LeftWhiteTextCSS>오늘 딱 하루만!</LeftWhiteTextCSS>
          <LeftWhiteTextCSS>일일특가</LeftWhiteTextCSS>
        </LeftContentTopBoxCSS>
        <LeftContentSpaceBoxCSS />
        <LeftContentContainBoxCSS>
          <LeftContainTextCSS>한정특가 남은시간</LeftContainTextCSS>
          <LeftContainTimerBoxCSS>
            <LeftClockImageCSS
              source={require('../../../../assets/image/sample/clock.png')}
            />
            <LeftRowSpaceCSS />
            <LeftTimerTextCSS>{timeLeft}</LeftTimerTextCSS>
          </LeftContainTimerBoxCSS>
          <LeftViewButtonCSS>
            <LeftTextInButton>바로가기</LeftTextInButton>
            <Icon name="arrow-right-alt" size={25} color="white" />
          </LeftViewButtonCSS>
        </LeftContentContainBoxCSS>
      </LeftContainerBoxCSS>
    </>
  );
};

export default LeftContainer;
