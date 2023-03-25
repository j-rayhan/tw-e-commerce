import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {SCREEN} from '../constants/constant';
import {Setting, SettingDetails} from '../screens/bottom_tab';

export type SettingStackParamList = {
  [SCREEN.SETTING]: undefined;
  [SCREEN.SETTING_DETAILS]: undefined;
};

const Stack = createStackNavigator<SettingStackParamList>();

const SettingNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREEN.SETTING} component={Setting} />
      <Stack.Screen name={SCREEN.SETTING_DETAILS} component={SettingDetails} />
    </Stack.Navigator>
  );
};

export default SettingNavigator;
