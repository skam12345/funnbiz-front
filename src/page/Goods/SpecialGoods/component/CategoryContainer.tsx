import React from 'react';
import {
  CategoryCntainerBoxCSS,
  CategoryCntainerEntCSS,
  CategoryCntainerTextCSS,
  CategoryContainerFinishCSS,
  CategoryContainerIcon,
  CategoryContainerPromotionCSS,
} from '../styled/CategoryContainerStyled';

/*TODO : 카테고리 버튼 색깔 및 아이콘 이벤트 처리  */
const CategoryContainer = () => {
  return (
    <>
      <CategoryCntainerBoxCSS>
        <CategoryCntainerEntCSS>
          <CategoryCntainerTextCSS style={{ color: 'white' }}>
            전체
          </CategoryCntainerTextCSS>
          <CategoryContainerIcon
            name="keyboard-arrow-down"
            size={20}
            color="white"
          />
        </CategoryCntainerEntCSS>
        <CategoryContainerFinishCSS>
          <CategoryCntainerTextCSS style={{ color: '#888888' }}>
            땡처리
          </CategoryCntainerTextCSS>
        </CategoryContainerFinishCSS>
        <CategoryContainerPromotionCSS>
          <CategoryCntainerTextCSS style={{ color: '#888888' }}>
            프로모션
          </CategoryCntainerTextCSS>
        </CategoryContainerPromotionCSS>
      </CategoryCntainerBoxCSS>
    </>
  );
};

export default CategoryContainer;
