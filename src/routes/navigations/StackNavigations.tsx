import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import HeaderSearchLeftBack from '../../Header/Left/HeaderSearchLeftBack';
import HeaderSearchBox from '../../Header/title/HeaderSearchBox';
import { LayoutContext } from '../../Store/context/AppHeaderContext';
import HeaderCalLeftClose from '../../common/screens/HeaderCalLeftClose';
import {
  HeaderLogoCSS,
  HeaderRightCSS,
} from '../../common/screens/styled/BottomTabStyle';
import Login from '../../page/Login/Login';
import SearchList from '../../page/SearchList/Search_List';
import TripCalendar from '../../page/TripCalendar/Trip_Calendar';
import TripGuest from '../../page/TripGuest/Trip_Guest';
import MainNavigation from './MainNavigation';

const Stack = createStackNavigator();

const StackNavigation = () => {
  const navigation = useNavigation();
  const mainHeader = useContext(LayoutContext);

  const LogoImage = ({ onPress }) => (
    <HeaderLogoCSS>
      <TouchableOpacity onPress={onPress}>
        <Image
          resizeMode="contain"
          source={require('../../assets/image/header/logo.png')}
        />
      </TouchableOpacity>
    </HeaderLogoCSS>
  );
  const RightIcon = ({ onPress }) => (
    <HeaderRightCSS>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={{
            width: 30,
            height: 30,
            bottom: 3,
          }}
          resizeMode="contain"
          source={require('../../assets/image/header/notification.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={{
            top: -5,
            width: 32,
            height: 32,
            marginLeft: 10,
          }}
          resizeMode="stretch"
          source={require('../../assets/image/header/headerSeach.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={{
            width: 24,
            height: 24,
            marginLeft: 10,
            marginRight: 5,
          }}
          resizeMode="stretch"
          source={require('../../assets/image/header/headerMenu.png')}
        />
      </TouchableOpacity>
    </HeaderRightCSS>
  );

  return (
    <Stack.Navigator screenOptions={{ headerShown: mainHeader.visibleMain }}>
      <Stack.Group>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen
          name="Main"
          component={MainNavigation}
          options={{
            headerTitle: '',
            headerLeft: props => <LogoImage {...props} />,
            headerRight: props => <RightIcon {...props} />,
          }}
        />
      </Stack.Group>
      <Stack.Screen
        name="TripCalendar"
        component={TripCalendar}
        options={{
          headerShown: mainHeader.visibleCalHead,
          headerTitle: '날짜 선택',
          headerTitleAlign: 'center',
          headerLeft: HeaderCalLeftClose,
        }}
      />
      <Stack.Screen
        name="TripGuest"
        component={TripGuest}
        options={{
          headerShown: mainHeader.visibleCalHead,
          headerTitle: '인원수 선택',
          headerTitleAlign: 'center',
          headerLeft: HeaderCalLeftClose,
        }}
      />
      <Stack.Screen
        name="SearchList"
        component={SearchList}
        options={{
          headerShown: mainHeader.visibleSearchListHead,
          headerTitle: HeaderSearchBox,
          headerTitleAlign: 'center',
          headerLeft: HeaderSearchLeftBack,
        }}
      />
      <Stack.Group>
        {/** 스택 네비게이션에서 메인네비게이션 밖에서 실행되어야할 컴포넌트 페이지들 (ex 약관동의? 회원가입프로세스) */}
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigation;
