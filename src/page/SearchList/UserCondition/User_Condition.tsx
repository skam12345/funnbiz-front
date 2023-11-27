import React from 'react';
import CalendarCondition from './component/CalendarCondition';
import GuestCondition from './component/GuestCondition';
import { UserConditionCSS } from './styled/UserConditionStyled';

const UserCondition = () => {
  return (
    <UserConditionCSS>
      <CalendarCondition />
      <GuestCondition />
    </UserConditionCSS>
  );
};

export default UserCondition;
