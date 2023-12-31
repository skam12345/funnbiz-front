import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { LayoutContext } from '../../../Store/context/AppHeaderContext';
import { CalendarContext } from '../../../Store/context/AppSearchCalendarContext';
import { GuestContext } from '../../../Store/context/AppSearchGuestContext';
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
  const guest = useContext(GuestContext);
  const calendar = useContext(CalendarContext);
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

  const goSearchList = () => {
    if (headers.visibleTabHead) {
      headers.setVisibleSearchListHead(true);
    }
    headers.setVisibleTabHead(false);
    navigation.navigate('SearchList');
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
                {`${calendar.checkIn} ~ ${calendar.checkOut}`}
              </SearchContentCalDateTextCSS>
            </SearchContentCalIconBoxCSS>
            <SearchContentCalTextBoxCSS>
              <SearchContentCalTextCSS>
                {!empty(calendar.night) ? `${calendar.night}박` : '0박'}
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
              성인 {guest.adult}, 아동 {guest.child}
            </SearchContentGuestTextCSS>
          </SearchContentGuestBoxCSS>
        </SearchContentCalAndGuestBoxCSS>
        <SearchContentButtonBoxCSS onPress={goSearchList}>
          <SearchContentButtonTextCSS>검색</SearchContentButtonTextCSS>
        </SearchContentButtonBoxCSS>
      </SearchContentContainerCSS>
    </SearchBoxCSS>
  );
};

export default SearchBox;
