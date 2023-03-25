import type {DrawerNavigationProp} from '@react-navigation/drawer';
import * as React from 'react';
import {View, Text, Pressable} from 'react-native';
import {DrawerStackParamList} from '../../navigation/DrawerNavigator';
import {useNavigation} from '@react-navigation/native';

type Props = DrawerNavigationProp<DrawerStackParamList>;

const Home = () => {
  const navigation = useNavigation<Props>();
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-4xl">Edit Home.tsx to change this screen.</Text>
      <Pressable
        className="w-8/12 p-4 my-4 bg-slate-400 rounded-md justify-center items-center"
        onPress={() => navigation.openDrawer()}>
        <Text className="text-white font-semibold text-lg">Open Drawer</Text>
      </Pressable>
    </View>
  );
};

export default Home;
