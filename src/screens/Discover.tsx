import * as React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import {Avatar, HeroImage} from '../assets';

const Discover = () => {
  return (
    <SafeAreaView className="flex-1 bg-white relative">
      {/* Header Section */}
      <View className="flex-row items-center justify-between px-6 mt-6">
        <View>
          <Text className="text-4xl font-bold text-slate-500">Discover</Text>
          <Text className="text-4xl font-normal text-slate-300">
            the beauty today
          </Text>
        </View>
        <View className="w-12 h-12 rounded-md items-center justify-center shadow-lg">
          <Image
            source={Avatar}
            className="w-full h-full object-cover rounded-md"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Discover;
