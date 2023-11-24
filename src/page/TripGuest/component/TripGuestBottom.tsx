import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react';
import { LayoutContext } from '../../../Store/context/AppHeaderContext';
import {
  TripGuestBottomButtonCSS,
  TripGuestBottomButtonTextCSS,
  TripGuestBottomCSS,
} from '../styled/TripGuestBottomStyled';

const TripGuestBottom = () => {
  const headers = useContext(LayoutContext);
  const navigation = useNavigation();

  useEffect(() => {
    if (headers.adult === 0) {
      headers.setButtonStyle({
        backgroundColor: 'grey',
      });
    } else {
      headers.setButtonStyle({
        backgroundColor: '#6866F7',
      });
    }
  }, [headers.adult]);
  const goBackSearch = () => {
    if (headers.adult !== 0) {
      headers.setVisibleTabHead(true);
      headers.setVisibleCalHead(false);
      navigation.navigate('Search');
    }
  };
  return (
    <TripGuestBottomCSS>
      <TripGuestBottomButtonCSS
        style={headers.buttonStyle}
        onPress={goBackSearch}
        disabled={headers.adult === 0 ? true : false}
      >
        <TripGuestBottomButtonTextCSS>
          {headers.adult != 0
            ? `성인 ${headers.adult}, 아동 ${headers.child} · 선택완료`
            : `성인 ${headers.adult}, 아동 ${headers.child} · 선택 전`}
        </TripGuestBottomButtonTextCSS>
      </TripGuestBottomButtonCSS>
    </TripGuestBottomCSS>
  );
};

export default TripGuestBottom;
