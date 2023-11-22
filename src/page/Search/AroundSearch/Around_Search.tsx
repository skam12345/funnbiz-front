import React from 'react';
import {
  AroundSearchCSS,
  AroundSearchContentBoxCSS,
  AroundSearchContentCSS,
  AroundSearchContentIconCSS,
  AroundSearchContentTextCSS,
} from './styled/AroundSearchStyled';

const AroundSearch = () => {
  return (
    <AroundSearchCSS>
      <AroundSearchContentCSS>
        <AroundSearchContentBoxCSS>
          <AroundSearchContentIconCSS
            name="map-search-outline"
            size={35}
            color="black"
          />
          <AroundSearchContentTextCSS>
            현재 내 주변에서 검색
          </AroundSearchContentTextCSS>
        </AroundSearchContentBoxCSS>
      </AroundSearchContentCSS>
    </AroundSearchCSS>
  );
};

export default AroundSearch;
