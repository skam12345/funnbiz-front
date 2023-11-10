import React from 'react';
import { tripWay } from '../../../../config/constant/top/TopVariable';
import {
  RecommandBlueTextCSS,
  RecommandBoxCSS,
  RecommandHeadTitleBoxCSS,
  RecommandHeadTitleTextCSS,
  TopContentBoxCSS,
  TopMiddleSpaceCSS,
  TopTripBoxCSS,
  TopTripImageCSS,
  TopTripTextCSS,
} from '../../styled/top/TopDisplayStyled';

const RecommandComponent = () => {
  return (
    <>
      <TopMiddleSpaceCSS />
      <RecommandBoxCSS>
        <RecommandHeadTitleBoxCSS>
          <RecommandHeadTitleTextCSS>
            <RecommandBlueTextCSS>홍길동</RecommandBlueTextCSS>님을 위한 추천!
          </RecommandHeadTitleTextCSS>
        </RecommandHeadTitleBoxCSS>
        {tripWay?.map(data => (
          <TopTripBoxCSS key={data?.key}>
            {data?.content.map(item => (
              <TopContentBoxCSS key={item?.key}>
                <TopTripImageCSS source={item?.img} resizeMode="cover" />
                <TopTripTextCSS>{item?.Text}</TopTripTextCSS>
              </TopContentBoxCSS>
            ))}
          </TopTripBoxCSS>
        ))}
      </RecommandBoxCSS>
    </>
  );
};

export default RecommandComponent;
