import React, { useCallback, useContext, useEffect } from 'react';
import { LayoutContext } from '../../../Store/context/AppHeaderContext';
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
  const headers = useContext(LayoutContext);

  useEffect(() => {
    if (headers.adult == 0) {
      headers.setAdultStyle({
        backgroundColor: 'grey',
      });
    } else {
      headers.setAdultStyle({
        backgroundColor: '#6866F7',
      });
    }
  }, [headers.adult]);

  useEffect(() => {
    if (headers.child == 0) {
      headers.setChildStyle({
        backgroundColor: 'grey',
      });
    } else {
      headers.setChildStyle({
        backgroundColor: '#6866F7',
      });
    }
  }, [headers.child]);

  const onPlus = useCallback(
    (key: string) => {
      if (key === 'adult') {
        if (headers.adult < 8) {
          headers.setAdult(headers.adult + 1);
        }
      } else {
        if (headers.child < 8) {
          headers.setChild(headers.child + 1);
        }
      }
    },
    [headers.adult, headers.child],
  );

  const onMinus = useCallback(
    (key: string) => {
      if (key === 'adult') {
        if (headers.adult > 0) {
          headers.setAdult(headers.adult - 1);
        }
      } else {
        if (headers.child > 0) {
          headers.setChild(headers.child - 1);
        }
      }
    },
    [headers.adult, headers.child],
  );
  return (
    <TripGuestControlTotalContainerCSS>
      <TripGuestControlContainerCSS>
        <TripGuestAgeTextCSS>성인</TripGuestAgeTextCSS>
        <TripGuestControlPartContainerCSS>
          <TripGuestControlPartButtonCSS
            style={headers.adultStyle}
            onPress={() => onMinus('adult')}
          >
            <TripGuestControlPartButtenTextCSS>
              －
            </TripGuestControlPartButtenTextCSS>
          </TripGuestControlPartButtonCSS>
          <TripGuestControlPartButtonNumberCSS>
            {headers.adult}
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
            style={headers.childStyle}
            onPress={() => onMinus('child')}
          >
            <TripGuestControlPartButtenTextCSS>
              －
            </TripGuestControlPartButtenTextCSS>
          </TripGuestControlPartButtonCSS>
          <TripGuestControlPartButtonNumberCSS>
            {headers.child}
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
