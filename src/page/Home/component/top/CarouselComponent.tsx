import Carousel from 'react-native-reanimated-carousel';

import React from 'react';
import {
  data,
  height,
  width,
} from '../../../../config/constant/top/TopVariable';
import { TopBannerCSS } from '../../styled/top/TopDisplayStyled';
import ScrollImageContentComponent from './ScrollImageContentComponent';

const CarouselComponent = () => {
  return (
    <>
      <Carousel
        loop
        width={width * 1.0}
        height={height * 0.56}
        autoPlay={true}
        autoPlayInterval={4000}
        data={[1, 2, 3, 4]}
        scrollAnimationDuration={2000}
        renderItem={({ index }) => (
          <TopBannerCSS
            key={data[index]?.key}
            source={data[index]?.img}
            alt="배경화면"
            resizeMode="stretch"
          >
            <ScrollImageContentComponent
              text={data[index]?.design}
              title={data[index]?.title}
              region={data[index]?.region}
              intro={data[index]?.intro}
            />
          </TopBannerCSS>
        )}
      />
    </>
  );
};

export default CarouselComponent;
