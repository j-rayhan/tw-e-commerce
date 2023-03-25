import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SCREEN} from '../constants/constant';
import {Home, Notification, Setting, Wallet} from '../screens/bottom_tab';

export type BottomStackParamList = {
  [SCREEN.HOME]: undefined;
  [SCREEN.WALLET]: undefined;
  [SCREEN.NOTIFICATION]: undefined;
  [SCREEN.SETTING]: undefined;
};

function CustomTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  return (
    <View className="flex-row items-center p-2 py-4">
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
            className="p-2"
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text>
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
      <Tab.Screen name={SCREEN.HOME} component={Home} />
      <Tab.Screen name={SCREEN.WALLET} component={Wallet} />
      <Tab.Screen name={SCREEN.NOTIFICATION} component={Notification} />
      <Tab.Screen name={SCREEN.SETTING} component={Setting} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
