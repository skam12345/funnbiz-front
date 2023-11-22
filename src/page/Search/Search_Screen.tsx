import React from 'react';
import AroundSearch from './AroundSearch/Around_Search';
import CurrentSearch from './CurrentSearch/Current_Search';
import MenuSearch from './MenuSearch/Menu_Search';
import PopularSearch from './PopularSearch/Popular_Search';
import SearchBox from './SearchBox/Search_Box';
import {
  SearchScreenCSS,
  SearchScreenLineCSS,
} from './styled/SearchScreenStyled';

const SearchScreen = () => {
  return (
    <SearchScreenCSS>
      <MenuSearch />
      <SearchBox />
      <AroundSearch />
      <CurrentSearch />
      <SearchScreenLineCSS />
      <PopularSearch />
    </SearchScreenCSS>
  );
};

export default SearchScreen;
