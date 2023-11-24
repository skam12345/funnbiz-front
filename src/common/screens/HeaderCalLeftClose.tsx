import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { LayoutContext } from '../../Store/context/AppHeaderContext';

// X 버튼
const HeaderCalLeftClose = () => {
  const navigation = useNavigation();
  const headers = useContext(LayoutContext);

  const onPressHandler = () => {
    headers.setVisibleTabHead(true);
    headers.setVisibleCalHead(false);
    navigation.navigate('Search');
  };

  return (
    <TouchableOpacity onPress={onPressHandler}>
      <Image
        style={{
          width: 24,
          height: 24,
          marginLeft: 10,
          marginRight: 5,
        }}
        resizeMode="stretch"
        source={require('../../assets/image/header/close.png')}
      />
    </TouchableOpacity>
  );
};

export default HeaderCalLeftClose;
