import React from 'react';
import { tripView } from '../../../../config/constant/top/TopVariable';
import {
  TopBottomTopSpaceCSS,
  TopContentBoxCSS,
  TopHeadTitleBoxCSS,
  TopHouseBoxCSS,
  TopTripBoxCSS,
  TopTripHeadTextCSS,
  TopTripImageCSS,
  TopTripTextCSS,
} from '../../styled/top/TopDisplayStyled';

const TripHouseComponent = () => {
  return (
    <>
      <TopBottomTopSpaceCSS />
      <TopHouseBoxCSS>
        <TopHeadTitleBoxCSS>
          <TopTripHeadTextCSS>국내숙박</TopTripHeadTextCSS>
        </TopHeadTitleBoxCSS>
        {tripView?.map(data => (
          <TopTripBoxCSS key={data?.key}>
            {data?.content.map(item => (
              <TopContentBoxCSS key={item?.key}>
                <TopTripImageCSS source={item?.img} resizeMode="cover" />
                <TopTripTextCSS>{item?.Text}</TopTripTextCSS>
              </TopContentBoxCSS>
            ))}
          </TopTripBoxCSS>
        ))}
      </TopHouseBoxCSS>
    </>
  );
};

export default TripHouseComponent;
