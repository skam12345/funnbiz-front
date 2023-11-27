import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';
import { LayoutContext } from '../../Store/context/AppHeaderContext';
const Pressable = styled.Pressable``;
const IconContainer = styled.View<{ pressed: boolean }>`
  opacity: ${({ pressed }) => (pressed ? 0.55 : 1)};
  left: 10px;
  justify-content: center;
  width: 15px;
  height: 15px;
`;

const HeaderSearchLeftBack = () => {
  const headers = useContext(LayoutContext);
  const navigation = useNavigation();
  const onPressHandler = () => {
    headers.setVisibleTabHead(true);
    headers.setVisibleSearchListHead(false);
    navigation.navigate('Search');
  };
  return (
    <Pressable onPress={onPressHandler} hitSlop={8}>
      {({ pressed }) => (
        <IconContainer pressed={pressed}>
          <Image
            style={{ width: 25, height: 25 }}
            source={require('../../assets/image/header/back.png')}
          />
        </IconContainer>
      )}
    </Pressable>
  );
};

export default HeaderSearchLeftBack;
