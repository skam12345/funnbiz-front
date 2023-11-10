import React from 'react';
import LeftContainer from './component/LeftContainer';
import RightContainer from './component/RightContainer';
import {
  DailyGoodsContainerCSS,
  GoodsContentContainerCSS,
} from './styled/ContainerStyled';

const DailyGoods = () => {
  return (
    <>
      <DailyGoodsContainerCSS>
        <GoodsContentContainerCSS>
          <LeftContainer />
          <RightContainer />
        </GoodsContentContainerCSS>
      </DailyGoodsContainerCSS>
    </>
  );
};

export default DailyGoods;
