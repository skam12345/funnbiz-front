import React from 'react';
import TypeCondition from './TypeCondition/Type_Condition';
import UserCondition from './UserCondition/User_Condition';
import { SearchListCSS } from './styled/SearchListStyled';

const SearchList = () => {
  return (
    <SearchListCSS>
      <UserCondition />
      <TypeCondition />
    </SearchListCSS>
  );
};

export default SearchList;
