import React from 'react';
import TripGuestBottom from './component/TripGuestBottom';
import TripGuestControl from './component/TripGuestControl';
import TripGuestText from './component/TripGuestText';
import { TripGuestContainerCSS } from './styled/TripGuestStyled';

const TripGuest = () => {
  return (
    <TripGuestContainerCSS>
      <TripGuestText />
      <TripGuestControl />
      <TripGuestBottom />
    </TripGuestContainerCSS>
  );
};

export default TripGuest;
