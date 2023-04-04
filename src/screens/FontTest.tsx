import * as React from 'react';
import { Text, SafeAreaView, View, Dimensions } from 'react-native';
const data = [
  {
    key: '1',
    label: '10',
    value: '[10px]',
  },
  {
    key: '2',
    label: '12',
    value: 'xs',
  },
  {
    key: '3',
    label: '14',
    value: 'sm',
  },
  {
    key: '4',
    label: '16',
    value: 'base',
  },
  {
    key: '5',
    label: '18',
    value: 'lg',
  },
  {
    key: '6',
    label: '20',
    value: 'xl',
  },
  {
    key: '7',
    label: '24',
    value: '2xl',
  },
  {
    key: '8',
    label: '30',
    value: '3xl',
  },
  {
    key: '9',
    label: '36',
    value: '4xl',
  },
  {
    key: '10',
    label: '48',
    value: '5xl',
  },
  {
    key: '11',
    label: '60',
    value: '6xl',
  },
  {
    key: '12',
    label: '72',
    value: '7xl',
  },
  {
    key: '13',
    label: '[72]',
    value: '[72px]',
  },
  // {
  //   key: '',
  //   label: '',
  //   value: '',
  // },
];
const FontTest = () => {
  return (
    <SafeAreaView className="flex-1 bg-white relative">
      {/* Screen width */}
      <View className="flex-row space-x-2">
        <Text className="text-lg">
          Screen: {Dimensions.get('screen').width}
        </Text>
        <Text className="text-lg">
          window: {Dimensions.get('window').width}
        </Text>
      </View>
      {data.map(({ key, value, label }) => (
        <View key={key} className="flex-row items-center">
          <Text>{label}px</Text>
          <Text className={`text-black opacity-60 text-${value} font-semibold`}>
            The quick
          </Text>
        </View>
      ))}
    </SafeAreaView>
  );
};

export default FontTest;
