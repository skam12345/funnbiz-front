import React from 'react';
import { ExPopularSearchData } from '../../../config/constant/sample/Sampe_HyeonHo';
import {
  PopularSearchCSS,
  PopularSearchGradeGreenText,
  PopularSearchGradeTenText,
  PopularSearchGradeText,
  PopularSearchListBoxCSS,
  PopularSearchRowBoxCSS,
  PopularSearchRowContentBox,
  PopularSearchTitleTextCSS,
  PopularSearchWordText,
} from './styled/PopularSearchStyled';

const PopularSearch = () => {
  return (
    <PopularSearchCSS>
      <PopularSearchTitleTextCSS>인기검색어</PopularSearchTitleTextCSS>
      <PopularSearchListBoxCSS>
        {ExPopularSearchData.data?.map((data, index) => (
          <PopularSearchRowBoxCSS key={index}>
            {data.map(content => (
              <PopularSearchRowContentBox>
                {content.idle ? (
                  <PopularSearchGradeGreenText key={content.id}>
                    {content.id}
                  </PopularSearchGradeGreenText>
                ) : content.id !== 10 ? (
                  <PopularSearchGradeText>{content.id}</PopularSearchGradeText>
                ) : (
                  <PopularSearchGradeTenText>
                    {content.id}
                  </PopularSearchGradeTenText>
                )}
                <PopularSearchWordText>{content.content}</PopularSearchWordText>
              </PopularSearchRowContentBox>
            ))}
          </PopularSearchRowBoxCSS>
        ))}
      </PopularSearchListBoxCSS>
    </PopularSearchCSS>
  );
};

export default PopularSearch;
