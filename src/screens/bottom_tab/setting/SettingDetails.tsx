import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import * as React from 'react';
import {View, Text, Pressable} from 'react-native';
import {SCREEN} from '../../../constants/constant';
import {SettingStackParamList} from '../../../navigation/SettingNavigator';

type Props = StackNavigationProp<SettingStackParamList>;

const SettingDetails = () => {
  const navigation = useNavigation<Props>();
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-4xl">
        Edit SettingDetails.tsx to change this screen.
      </Text>
      <Pressable
        className="w-8/12 p-4 my-4 bg-slate-400 rounded-md justify-center items-center"
        onPress={() => navigation.goBack()}>
        <Text className="text-white font-semibold text-lg">Go Back</Text>
      </Pressable>
    </View>
  );
};

export default SettingDetails;
