import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {SCREEN} from '../constants/constant';
import {Login, SignUp, ForgotPassword} from '../screens';

export type AuthStackParamList = {
  [SCREEN.LOGIN]: undefined;
  [SCREEN.SIGNUP]: undefined;
  [SCREEN.FORGOT_PASSWORD]: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={SCREEN.LOGIN} component={Login} />
      <Stack.Screen name={SCREEN.SIGNUP} component={SignUp} />
      <Stack.Screen name={SCREEN.FORGOT_PASSWORD} component={ForgotPassword} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
