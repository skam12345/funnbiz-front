import React from 'react';
import CategoryContainer from './component/CategoryContainer';
import RollingContainer from './component/RollingContainer';
import TextContainer from './component/TextContainer';
import { SpecialGoodsBoxCSS } from './styled/SpeicalGoodsStyled';

const SpecialGoods = () => {
  return (
    <>
      <SpecialGoodsBoxCSS>
        <TextContainer />
        <CategoryContainer />
        <RollingContainer />
      </SpecialGoodsBoxCSS>
    </>
  );
};

export default SpecialGoods;
