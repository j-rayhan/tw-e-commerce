import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SCREEN} from '../constants/constant';
import {Home, Notification, Wallet} from '../screens/bottom_tab';
import SettingNavigator from './SettingNavigator';
import FontTest from '../screens/FontTest';

export type BottomStackParamList = {
  [SCREEN.HOME]: undefined;
  [SCREEN.WALLET]: undefined;
  [SCREEN.NOTIFICATION]: undefined;
  [SCREEN.SETTING_NAVIGATOR]: undefined;
};

function CustomTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  return (
    <View className="w-screen flex-row items-center py-6">
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            className="flex-auto"
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Text
              className="text-center text-xl"
              style={{color: isFocused ? '#673ab7' : '#222'}}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const Tab = createBottomTabNavigator<BottomStackParamList>();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name={SCREEN.HOME} component={FontTest} />
      <Tab.Screen name={SCREEN.WALLET} component={Wallet} />
      <Tab.Screen name={SCREEN.NOTIFICATION} component={Notification} />
      <Tab.Screen
        name={SCREEN.SETTING_NAVIGATOR}
        component={SettingNavigator}
        options={{
          tabBarLabel: 'Setting',
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
