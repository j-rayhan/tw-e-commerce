/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigation} from './src/navigation';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}

export default App;
