/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { LayoutProvider } from './src/Store/context/AppHeaderContext';
import StackNavigation from './src/routes/navigations/StackNavigations';

const App = () => {
  return (
    <LayoutProvider children>
      <NavigationContainer children>
        <StackNavigation />
      </NavigationContainer>
    </LayoutProvider>
  );
};

export default App;
