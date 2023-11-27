import React from 'react';
import styled from 'styled-components/native';
import { d_width } from '../../config/constant';
import HeaderRightSearch from '../right/HeaderRightSearch';

const HeaderSearchBoxContainer = styled.TextInput`
  width: ${d_width * 0.65}px;
  height: 90%;
  border-radius: 10px;
  border: 1px solid grey;
`;

const HeaderSearchCircleCancel = styled.TouchableOpacity`
  position: absolute;
  top: 18px;
  left: 86%;
  width: 20px;
  height: 20px;
  border-radius: 15px;
  background-color: #dfdcdc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CancelText = styled.Text`
  margin-top: -10px;
  font-size: 25px;
  font-weight: 300;
  color: white;
`;

const HeaderSearchBox = () => {
  return (
    <>
      <HeaderSearchBoxContainer></HeaderSearchBoxContainer>
      <HeaderSearchCircleCancel>
        <CancelText>×</CancelText>
      </HeaderSearchCircleCancel>
      <HeaderRightSearch />
    </>
  );
};

export default HeaderSearchBox;
