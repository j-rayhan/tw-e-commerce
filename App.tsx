/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigator, BottomTabNavigator} from './src/navigation';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      {/* {isAuthenticated ? AuthNavigator : DrawerNavigator } */}
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

export default App;
