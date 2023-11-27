import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import React, { PropsWithChildren, useContext } from 'react';
import HeaderLeftGoBack from '../../Header/Left/HeaderLeftBack';
import { LayoutContext } from '../../Store/context/AppHeaderContext';
import {
  Area,
  CusttomTabItems,
  Mark,
  Menu,
  Searching,
  TabIcon,
} from '../../common/screens/BottomTab';
import {
  CustomBarButtonCSS,
  TouchOpacityCSS,
} from '../../common/screens/styled/BottomTabStyle';
import HomeScreen from '../../page/Home/Home_Screen';
const Tab = createBottomTabNavigator();

// stack navigation
interface CusttomButtonProp {
  children: undefined;
  onPress: Function;
}

const MainNavigation = () => {
  const navigation = useNavigation();
  const headers = useContext(LayoutContext);

  const searchHandler = onPress => {
    if (headers.visibleMain) {
      headers.setVisibleTabHead(true);
    }
    headers.setVisibleMain(false);
    onPress();
  };
  const CustomBarButton = ({
    children,
    onPress,
  }: PropsWithChildren<CusttomButtonProp>) => (
    <TouchOpacityCSS onPress={() => searchHandler(onPress)}>
      <CustomBarButtonCSS>{children}</CustomBarButtonCSS>
    </TouchOpacityCSS>
  );

  return (
    <Tab.Navigator screenOptions={{ headerShown: headers.visibleTabHead }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} imageName={'home'} />
          ),
        }}
      />
      <Tab.Screen
        name="Area"
        component={Area}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} imageName={'area'} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Searching}
        options={{
          tabBarIcon: () => <CusttomTabItems />,
          tabBarButton: props => <CustomBarButton {...props} />,
          tabBarLabelStyle: {
            bottom: 6.5,
          },
          headerLeft: () => HeaderLeftGoBack(navigation),
          headerShown: true,
          headerTitle: '이용가능 시설검색',
          headerTitleAlign: 'center',
          tabBarStyle: { display: 'none' },
        }}
      />
      <Tab.Screen
        name="mark"
        component={Mark}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} imageName={'mark'} />
          ),
        }}
      />
      <Tab.Screen
        name="menu"
        component={Menu}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} imageName={'menu'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;
