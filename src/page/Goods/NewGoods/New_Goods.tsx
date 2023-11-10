import React from 'react';
import ImageRollingContainer from './component/ImageRollingContainer';
import TitleContainer from './component/TitleContainer';
import { NewGoodsContainerBoxCSS } from './styled/NewGoodStyled';

const NewGoods = () => {
  return (
    <>
      <NewGoodsContainerBoxCSS>
        <TitleContainer />
        <ImageRollingContainer />
      </NewGoodsContainerBoxCSS>
    </>
  );
};

export default NewGoods;
