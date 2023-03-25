import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {SCREEN} from '../constants/constant';
import {Home, Notification, Setting, Wallet} from '../screens/bottom_tab';

export type BottomStackParamList = {
  [SCREEN.HOME]: undefined;
  [SCREEN.WALLET]: undefined;
  [SCREEN.NOTIFICATION]: undefined;
  [SCREEN.SETTING]: undefined;
};

const Tab = createBottomTabNavigator<BottomStackParamList>();

function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={SCREEN.HOME} component={Home} />
      <Tab.Screen name={SCREEN.WALLET} component={Wallet} />
      <Tab.Screen name={SCREEN.NOTIFICATION} component={Notification} />
      <Tab.Screen name={SCREEN.SETTING} component={Setting} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
