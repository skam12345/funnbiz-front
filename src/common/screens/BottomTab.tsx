import React from 'react';
import { Image, View } from 'react-native';
import SearchScreen from '../../page/Search/Search_Screen';
import { BottomIconCSS, Contaniner, TextCSS } from './styled/BottomTabStyle';

export const Home = () => {
  return (
    <Contaniner>
      <TextCSS>Home</TextCSS>
    </Contaniner>
  );
};

export const Area = () => {
  return (
    <Contaniner>
      <TextCSS>Area</TextCSS>
    </Contaniner>
  );
};

export const Searching = () => {
  console.log('Searching');
  return <SearchScreen />;
};

export const Menu = () => {
  return (
    <Contaniner>
      <TextCSS>Menu</TextCSS>
    </Contaniner>
  );
};

export const Mark = () => {
  return (
    <Contaniner>
      <TextCSS>Mark</TextCSS>
    </Contaniner>
  );
};

interface TabItemsProps {
  focused: boolean;
  imageName: string;
}

export const TabIcon: React.FC<TabItemsProps> = ({ focused, imageName }) => (
  /* TODO : require 사용시 리터널문법으로 변경해서
   * path 인식을 할 수 없는 문제가 있어서 이렇게 구현함
   * 이미지 읽기 다른 방법 있는지 확인 필요
   */
  <View
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      top: 5,
    }}
  >
    {imageName === 'home' ? (
      <BottomIconCSS
        source={require('../../assets/image/icons/home.png')}
        focused={focused}
      />
    ) : imageName === 'area' ? (
      <BottomIconCSS
        source={require('../../assets/image/icons/myarea.png')}
        focused={focused}
      />
    ) : imageName === 'mark' ? (
      <BottomIconCSS
        source={require('../../assets/image/icons/mark.png')}
        focused={focused}
      />
    ) : imageName === 'menu' ? (
      <BottomIconCSS
        source={require('../../assets/image/icons/menu.png')}
        focused={focused}
      />
    ) : (
      <></>
    )}
  </View>
);

export const CusttomTabItems = () => (
  <Image
    source={require('../../assets/image/icons/search.png')}
    resizeMode="contain"
    style={{
      width: 30,
      height: 30,
    }}
  />
);
