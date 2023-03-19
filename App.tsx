/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
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
import { useColorScheme } from 'nativewind';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const {colorScheme, toggleColorScheme} = useColorScheme()
  const backgroundStyle = 'bg-neutral-300 dark:bg-slate-900';
  return (
    <SafeAreaView className={backgroundStyle}>
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View>
        <Switch
          value={colorScheme === 'dark'}
          onChange={() => toggleColorScheme()}
        />
        <Text className="text-2xl text-black dark:text-white">
          Start RN App....
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
