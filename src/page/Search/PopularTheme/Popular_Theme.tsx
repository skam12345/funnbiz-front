import React from 'react';
import { FlatList } from 'react-native';
import { ExPopularThemeData } from '../../../config/constant/sample/Sampe_HyeonHo';
import {
  PopularThemeCSS,
  PopularThemeContentBox,
  PopularThemeContentText,
  PopularThemeRollingBoxThemeListCSS,
  PopularThemeTitleTextCSS,
} from './styled/PopularThemeStyled';

const PopularTheme = () => {
  return (
    <PopularThemeCSS>
      <PopularThemeTitleTextCSS>인기테마 키워드</PopularThemeTitleTextCSS>
      <PopularThemeRollingBoxThemeListCSS>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={ExPopularThemeData.data}
          renderItem={data => (
            <PopularThemeContentBox
              key={data.item.id}
              style={{
                width: data.item.content.length * 14 + 10,
              }}
            >
              <PopularThemeContentText>
                {data.item.content}
              </PopularThemeContentText>
            </PopularThemeContentBox>
          )}
        />
      </PopularThemeRollingBoxThemeListCSS>
    </PopularThemeCSS>
  );
};

export default PopularTheme;
