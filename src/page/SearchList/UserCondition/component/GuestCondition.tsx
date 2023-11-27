import React, { useContext } from 'react';
import { GuestContext } from '../../../../Store/context/AppSearchGuestContext';
import {
  GuestConditionCSS,
  GuestConditionIconCSS,
  GuestConditionTextCSS,
} from '../styled/GuestConditionStyled';

const GuestCondition = () => {
  const guest = useContext(GuestContext);
  return (
    <GuestConditionCSS width={18 * 9.5}>
      <GuestConditionIconCSS
        name="supervised-user-circle"
        size={26}
        color="black"
      />
      <GuestConditionTextCSS>
        성인 {guest.adult}, 아동 {guest.child}
      </GuestConditionTextCSS>
    </GuestConditionCSS>
  );
};

export default GuestCondition;
