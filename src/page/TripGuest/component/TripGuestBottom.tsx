import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react';
import { LayoutContext } from '../../../Store/context/AppHeaderContext';
import { GuestContext } from '../../../Store/context/AppSearchGuestContext';
import {
  TripGuestBottomButtonCSS,
  TripGuestBottomButtonTextCSS,
  TripGuestBottomCSS,
} from '../styled/TripGuestBottomStyled';

const TripGuestBottom = () => {
  const guest = useContext(GuestContext);
  const headers = useContext(LayoutContext);
  const navigation = useNavigation();

  useEffect(() => {
    if (guest.adult === 0) {
      guest.setButtonStyle({
        backgroundColor: 'grey',
      });
    } else {
      guest.setButtonStyle({
        backgroundColor: '#6866F7',
      });
    }
  }, [guest.adult]);
  const goBackSearch = () => {
    if (guest.adult !== 0) {
      headers.setVisibleTabHead(true);
      headers.setVisibleCalHead(false);
      navigation.navigate('Search');
    }
  };
  return (
    <TripGuestBottomCSS>
      <TripGuestBottomButtonCSS
        style={guest.buttonStyle}
        onPress={goBackSearch}
        disabled={guest.adult === 0 ? true : false}
      >
        <TripGuestBottomButtonTextCSS>
          {guest.adult != 0
            ? `성인 ${guest.adult}, 아동 ${guest.child} · 선택완료`
            : `성인 ${guest.adult}, 아동 ${guest.child} · 선택 전`}
        </TripGuestBottomButtonTextCSS>
      </TripGuestBottomButtonCSS>
    </TripGuestBottomCSS>
  );
};

export default TripGuestBottom;
