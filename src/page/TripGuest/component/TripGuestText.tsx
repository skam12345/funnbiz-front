import React from 'react';
import {
  TripGuestTextBoldCSS,
  TripGuestTextCSS,
  TripGuestTextContainerCSS,
} from '../styled/TripGuestTextStyled';

const TripGuestText = () => {
  return (
    <TripGuestTextContainerCSS>
      <TripGuestTextCSS>정확한 숙소검색 결과를 확인하려면</TripGuestTextCSS>
      <TripGuestTextCSS>
        <TripGuestTextBoldCSS>인원수를 선택</TripGuestTextBoldCSS>해주세요.
      </TripGuestTextCSS>
    </TripGuestTextContainerCSS>
  );
};

export default TripGuestText;
