import React, { useState } from 'react';
import {
  IconGoodCSS,
  RightContainerBoxCSS,
  RightDiscountBoxCSS,
  RightDiscountTextCSS,
  RightGoodsNameCSS,
  RightGoodsSubjectCSS,
  RightImageViewCSS,
  RightPriceBoxCSS,
  RightPriceTextCSS,
  RightPriceUnitCSS,
} from '../styled/RightContainerStyled';

const RightContainer = () => {
  const [iconName, setIconName] = useState('heart');

  const iconChange = () => {
    if (iconName === 'heart') {
      setIconName('heart-outline');
    } else {
      setIconName('heart');
    }
  };

  return (
    <>
      <RightContainerBoxCSS>
        <RightImageViewCSS
          source={require('../../../../assets/image/sample/dailyViewImage.png')}
        />
        <RightGoodsSubjectCSS>만족도 1위! 5성급 호텔</RightGoodsSubjectCSS>
        <RightGoodsNameCSS>콘레드 호텔 서울</RightGoodsNameCSS>
        <RightPriceBoxCSS>
          <RightDiscountBoxCSS>
            <RightDiscountTextCSS>20%</RightDiscountTextCSS>
          </RightDiscountBoxCSS>
          <RightPriceTextCSS>
            600,000~650,000<RightPriceUnitCSS>원</RightPriceUnitCSS>
          </RightPriceTextCSS>
        </RightPriceBoxCSS>
        <IconGoodCSS
          onPress={iconChange}
          name={iconName}
          size={20}
          color="red"
        />
      </RightContainerBoxCSS>
    </>
  );
};

export default RightContainer;
