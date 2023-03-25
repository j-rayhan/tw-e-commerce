import {createDrawerNavigator} from '@react-navigation/drawer';
import * as React from 'react';
import {SCREEN} from '../constants/constant';
import {Application, Notice, Profile} from '../screens/drawer';
import BottomTabNavigator from './BottomTabNavigator';

export type DrawerStackParamList = {
  [SCREEN.BOTTOM_NAVIGATOR]: undefined;
  [SCREEN.APPLICATION]: undefined;
  [SCREEN.NOTICE]: undefined;
  [SCREEN.PROFILE]: undefined;
};

const Drawer = createDrawerNavigator<DrawerStackParamList>();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={SCREEN.BOTTOM_NAVIGATOR}>
      <Drawer.Screen
        name={SCREEN.BOTTOM_NAVIGATOR}
        component={BottomTabNavigator}
        options={{drawerLabel: 'Home'}}
      />
      <Drawer.Screen
        name={SCREEN.NOTICE}
        component={Notice}
        options={{drawerLabel: 'Notice'}}
      />
      <Drawer.Screen
        name={SCREEN.PROFILE}
        component={Profile}
        options={{drawerLabel: 'Profile'}}
      />
      <Drawer.Screen
        name={SCREEN.APPLICATION}
        component={Application}
        options={{drawerLabel: 'Application'}}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
