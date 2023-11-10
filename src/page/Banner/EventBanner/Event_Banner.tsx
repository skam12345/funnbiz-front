import React from 'react';
import { EventBannerImageCSS } from './styled/EventBannerStyled';

const EventBanner = () => {
  return (
    <EventBannerImageCSS
      source={require('../../../assets/image/sample/eventBanner.png')}
      resizeMode="contain"
    />
  );
};

export default EventBanner;
