/* 
  TODO - TOP 화면에서 영역별로 분리 작업필요/
  의도 : 한화면을 컴포넌트로 일단 만들어놓고 나중에 분리하려고 작업 예정.
  
  TODO : 필수! : 반복 기능 람다 parameter는 Undefiend safety check 해줘야 함 변수명 뒤에(?/ ??)
          ?: Undefiend check
          ??: null/Undefined 둘중 하나 병합 체크
         / dart에는 !/? 가 있지만 react / native에는 물음표만 있음  */
import React from 'react';
import {
  BottomBannerCSS,
  TopContainerCSS,
} from '../styled/top/TopDisplayStyled';
import CarouselComponent from './top/CarouselComponent';
import RecommandComponent from './top/RecommandComponent';
import TripHouseComponent from './top/TripHouseComponent';

const TopDisplay = () => {
  return (
    <>
      <TopContainerCSS>
        {/* Image Scroll Banner on Top Screen */}
        <CarouselComponent />
        {/* Bottom Banner on Top Screen */}
        <BottomBannerCSS>
          {/* Contains interTrip Info Banner in Bottom Banner on Top Screen */}
          <TripHouseComponent />
          {/* Contains Recommand Product classification Info Banner in Bottom Banner on Top Screen */}
          <RecommandComponent />
        </BottomBannerCSS>
      </TopContainerCSS>
    </>
  );
};

export default TopDisplay;
