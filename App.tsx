/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {useColorScheme} from 'nativewind';
import ProductList from './src/components/ProductList';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const {colorScheme, toggleColorScheme} = useColorScheme();
  const backgroundStyle =
    'flex-1 justify-center items-center bg-gray-50 dark:bg-black';
  return (
    <SafeAreaView className={backgroundStyle}>
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <View className="flex-row w-full gap-5">
        <Text className="font-semibold text-xl dark:text-white">
          New Connection!
        </Text>
        <Switch
          value={colorScheme === 'dark'}
          onChange={() => toggleColorScheme()}
        />
      </View>
      <ProductList />
    </SafeAreaView>
  );
}

export default App;
