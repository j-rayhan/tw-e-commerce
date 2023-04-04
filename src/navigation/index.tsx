import * as React from 'react';

// import AuthNavigator from './AuthNavigator';
import BottomTabNavigator from './BottomTabNavigator';
// import SettingNavigator from './SettingNavigator';
import DrawerNavigator from './DrawerNavigator';

export const RootNavigation = () => {
  // const isAuthenticated = ....
  return (
    <>
      {/* {isAuthenticated ? AuthNavigator : DrawerNavigator } */}
      <DrawerNavigator />
    </>
  );
};
