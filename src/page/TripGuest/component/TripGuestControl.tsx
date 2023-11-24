import React, { useContext, useEffect } from 'react';
import { GuestContext } from '../../../Store/context/AppSearchGuestContext';
import {
  TripGuestAgeTextCSS,
  TripGuestControlContainerCSS,
  TripGuestControlPartButtenTextCSS,
  TripGuestControlPartButtonCSS,
  TripGuestControlPartButtonNumberCSS,
  TripGuestControlPartContainerCSS,
  TripGuestControlTotalContainerCSS,
} from '../styled/TripGuestControlStyled';

const TripGuestControl = () => {
  const guest = useContext(GuestContext);

  useEffect(() => {
    changeAdultStyle();
    changeChildStyle();
  }, [guest.adult, guest.child]);

  const changeAdultStyle = () => {
    if (guest.adult == 0) {
      guest.setAdultStyle({
        backgroundColor: 'grey',
      });
    } else {
      guest.setAdultStyle({
        backgroundColor: '#6866F7',
      });
    }
  };

  const changeChildStyle = () => {
    if (guest.child == 0) {
      guest.setChildStyle({
        backgroundColor: 'grey',
      });
    } else {
      guest.setChildStyle({
        backgroundColor: '#6866F7',
      });
    }
  };

  const onPlus = (key: string) => {
    if (key === 'adult') {
      if (guest.adult < 8) {
        guest.setAdult(guest.adult + 1);
      }
    } else {
      if (guest.child < 8) {
        guest.setChild(guest.child + 1);
      }
    }
  };

  const onMinus = (key: string) => {
    if (key === 'adult') {
      if (guest.adult > 0) {
        guest.setAdult(guest.adult - 1);
      }
    } else {
      if (guest.child > 0) {
        guest.setChild(guest.child - 1);
      }
    }
  };

  return (
    <TripGuestControlTotalContainerCSS>
      <TripGuestControlContainerCSS>
        <TripGuestAgeTextCSS>성인</TripGuestAgeTextCSS>
        <TripGuestControlPartContainerCSS>
          <TripGuestControlPartButtonCSS
            style={guest.adultStyle}
            onPress={() => onMinus('adult')}
          >
            <TripGuestControlPartButtenTextCSS>
              －
            </TripGuestControlPartButtenTextCSS>
          </TripGuestControlPartButtonCSS>
          <TripGuestControlPartButtonNumberCSS>
            {guest.adult}
          </TripGuestControlPartButtonNumberCSS>
          <TripGuestControlPartButtonCSS
            style={{ backgroundColor: '#6866F7' }}
            onPress={() => onPlus('adult')}
          >
            <TripGuestControlPartButtenTextCSS>
              ＋
            </TripGuestControlPartButtenTextCSS>
          </TripGuestControlPartButtonCSS>
        </TripGuestControlPartContainerCSS>
      </TripGuestControlContainerCSS>
      <TripGuestControlContainerCSS>
        <TripGuestAgeTextCSS>아동</TripGuestAgeTextCSS>
        <TripGuestControlPartContainerCSS>
          <TripGuestControlPartButtonCSS
            style={guest.childStyle}
            onPress={() => onMinus('child')}
          >
            <TripGuestControlPartButtenTextCSS>
              －
            </TripGuestControlPartButtenTextCSS>
          </TripGuestControlPartButtonCSS>
          <TripGuestControlPartButtonNumberCSS>
            {guest.child}
          </TripGuestControlPartButtonNumberCSS>
          <TripGuestControlPartButtonCSS
            style={{ backgroundColor: '#6866F7' }}
            onPress={() => onPlus('child')}
          >
            <TripGuestControlPartButtenTextCSS>
              ＋
            </TripGuestControlPartButtenTextCSS>
          </TripGuestControlPartButtonCSS>
        </TripGuestControlPartContainerCSS>
      </TripGuestControlContainerCSS>
    </TripGuestControlTotalContainerCSS>
  );
};

export default TripGuestControl;
