import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';

const Pressable = styled.Pressable`
  width: 15px;
  height: 15px;
  position: absolute;
  left: 95%;
`;
const IconContainer = styled.View<{ pressed: boolean }>`
  opacity: ${({ pressed }) => (pressed ? 0.55 : 1)};
  left: 25px;
  justify-content: center;
  width: 15px;
  height: 15px;
`;
const HeaderRightSearch = () => {
  return (
    <Pressable>
      {({ pressed }) => (
        <IconContainer pressed={pressed}>
          <Image
            style={{ width: 45, height: 45 }}
            resizeMode="cover"
            source={require('../../assets/image/header/search.png')}
          />
        </IconContainer>
      )}
    </Pressable>
  );
};

export default HeaderRightSearch;
