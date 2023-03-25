import {useNavigation} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';
import * as React from 'react';
import {View, Text, Pressable} from 'react-native';
import {SCREEN} from '../../constants/constant';
import {AuthStackParamList} from '../../navigation/AuthNavigator';

type Props = StackNavigationProp<AuthStackParamList>;

const Login = () => {
  const navigation = useNavigation<Props>();
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Edit Login.tsx to change this screen.</Text>
      <Pressable
        className="w-8/12 p-4 my-4 bg-slate-400 rounded-md justify-center items-center"
        onPress={() => navigation.navigate(SCREEN.SIGNUP)}>
        <Text className="text-white font-semibold text-lg">SIGN UP</Text>
      </Pressable>
      <Pressable
        className="w-8/12 justify-center items-end"
        onPress={() => navigation.navigate(SCREEN.FORGOT_PASSWORD)}>
        <Text className="text-red-400 font-semibold text-sm">
          Forgot password
        </Text>
      </Pressable>
    </View>
  );
};

export default Login;
