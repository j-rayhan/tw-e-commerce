import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Text, SafeAreaView, View, Pressable} from 'react-native';
import Animated, {
  FadeIn,
  FadeOutDown,
  Layout,
} from 'react-native-reanimated';
import {HeroImage} from '../assets';

const Home = () => {
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (
    <SafeAreaView className="flex-1 bg-white relative">
      {/* Header Section */}
      <View className="flex-row items-center px-6 mt-6 space-x-2">
        <View className="w-16 h-16 rounded-full items-center justify-center bg-black">
          <Text className="text-[#4DEBB7] text-3xl font-semibold">Go</Text>
        </View>
        <Text className="text-[#4e645c] text-3xl font-semibold">Travel</Text>
      </View>
      {/* Grading */}
      <View className="px-6 mt-8 space-y-3">
        <Text className="text-black text-opacity-60 text-[42px]">
          Enjoy the trip with
        </Text>
        <Text className="text-[#00bbc9] text-4xl font-bold">Good Moments</Text>
        <Text className="text-[#3c6072] text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
          tempore ea unde
        </Text>
      </View>
      {/* Circle section */}
      <View className="w-96 h-96 bg-blue-200 rounded-full absolute bottom-36 -right-36" />
      <View className="w-96 h-96 bg-orange-300 rounded-full absolute -bottom-36 -left-36" />

      {/* Image Section */}
      <View className="flex-1 justify-center items-center">
        <Animated.Image
          layout={Layout.delay(100)}
          entering={FadeIn}
          exiting={FadeOutDown}
          source={HeroImage}
          className="w-full h-full mt-20"
        />
        <View className="absolute bottom-20 w-24 h-24 justify-center items-center border-t-4 border-l-2 border-r-2 rounded-full border-slate-300">
          <Pressable
            onPress={() => navigation.navigate('Discover')}
            className="w-20 h-20 rounded-full bg-slate-300 justify-center items-center">
            <Text className="text-slate-600 text-4xl font-semibold">Go</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
