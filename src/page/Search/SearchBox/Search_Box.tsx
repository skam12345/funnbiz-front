import React from 'react';
import { SearchBoxCSS } from './styled/SearchBoxStyled';
import {
  SearchContentButtonBoxCSS,
  SearchContentButtonTextCSS,
  SearchContentCalAndGuestBoxCSS,
  SearchContentCalBoxCSS,
  SearchContentCalDateTextCSS,
  SearchContentCalIconBoxCSS,
  SearchContentCalIconCSS,
  SearchContentCalTextBoxCSS,
  SearchContentCalTextCSS,
  SearchContentContainerCSS,
  SearchContentGuestBoxCSS,
  SearchContentGuestIconCSS,
  SearchContentGuestTextCSS,
  SearchContentIconBoxCSS,
  SearchContentSearchBoxCSS,
  SearchContentSearchBoxIconCSS,
} from './styled/SearchContentContainerStyled';

const SearchBox = () => {
  return (
    <SearchBoxCSS>
      <SearchContentContainerCSS>
        <SearchContentSearchBoxCSS
          placeholder="'숙소명'또는'지역명'+숙박페스타를 검색해..."
          placeholderTextColor={'#A5A5A5'}
        />
        <SearchContentIconBoxCSS>
          <SearchContentSearchBoxIconCSS
            name="search"
            size={29}
            color="lightgreen"
          />
        </SearchContentIconBoxCSS>
        <SearchContentCalAndGuestBoxCSS>
          <SearchContentCalBoxCSS>
            <SearchContentCalIconBoxCSS>
              <SearchContentCalIconCSS
                name="calendar-month"
                size={26}
                color="black"
              />
              <SearchContentCalDateTextCSS>
                11.01 ~ 11.05
              </SearchContentCalDateTextCSS>
            </SearchContentCalIconBoxCSS>
            <SearchContentCalTextBoxCSS>
              <SearchContentCalTextCSS>4박</SearchContentCalTextCSS>
            </SearchContentCalTextBoxCSS>
          </SearchContentCalBoxCSS>
          <SearchContentGuestBoxCSS>
            <SearchContentGuestIconCSS
              name="supervised-user-circle"
              size={26}
              color="black"
            />
            <SearchContentGuestTextCSS>
              성인 2, 아동 0
            </SearchContentGuestTextCSS>
          </SearchContentGuestBoxCSS>
        </SearchContentCalAndGuestBoxCSS>
        <SearchContentButtonBoxCSS>
          <SearchContentButtonTextCSS>검색</SearchContentButtonTextCSS>
        </SearchContentButtonBoxCSS>
      </SearchContentContainerCSS>
    </SearchBoxCSS>
  );
};

export default SearchBox;
