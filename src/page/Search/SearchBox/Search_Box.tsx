import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { LayoutContext } from '../../../Store/context/AppHeaderContext';
import { empty } from '../../../config/constant';
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
  const navigation: any = useNavigation();
  const headers = useContext(LayoutContext);
  const goTripCalenderPage = () => {
    if (headers.visibleTabHead) {
      headers.setVisibleCalHead(true);
    }
    headers.setVisibleTabHead(false);
    navigation.navigate('TripCalendar');
  };

  const goTripGuestPage = () => {
    console.log('??');
    if (headers.visibleTabHead) {
      headers.setVisibleCalHead(true);
    }
    headers.setVisibleTabHead(false);
    navigation.navigate('TripGuest');
  };
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
          <SearchContentCalBoxCSS onPress={goTripCalenderPage}>
            <SearchContentCalIconBoxCSS>
              <SearchContentCalIconCSS
                name="calendar-month"
                size={26}
                color="black"
              />
              <SearchContentCalDateTextCSS>
                {`${headers.checkIn} ~ ${headers.checkOut}`}
              </SearchContentCalDateTextCSS>
            </SearchContentCalIconBoxCSS>
            <SearchContentCalTextBoxCSS>
              <SearchContentCalTextCSS>
                {!empty(headers.night) ? `${headers.night}박` : '0박'}
              </SearchContentCalTextCSS>
            </SearchContentCalTextBoxCSS>
          </SearchContentCalBoxCSS>
          <SearchContentGuestBoxCSS onPress={goTripGuestPage}>
            <SearchContentGuestIconCSS
              name="supervised-user-circle"
              size={26}
              color="black"
            />
            <SearchContentGuestTextCSS>
              성인 {headers.adult}, 아동 {headers.child}
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
