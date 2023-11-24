/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { LayoutProvider } from './src/Store/context/AppHeaderContext';
import { CalendarProvider } from './src/Store/context/AppSearchCalendarContext';
import { GuestProvider } from './src/Store/context/AppSearchGuestContext';
import StackNavigation from './src/routes/navigations/StackNavigations';

const App = () => {
  return (
    <GuestProvider chilren>
      <CalendarProvider chilren>
        <LayoutProvider children>
          <NavigationContainer children>
            <StackNavigation />
          </NavigationContainer>
        </LayoutProvider>
      </CalendarProvider>
    </GuestProvider>
  );
};

export default App;
