import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { StyleSheet, Switch, Text, View } from 'react-native';

export default function App() {
  const {colorScheme, toggleColorScheme} = useColorScheme()
  return (
    <View className="flex-1 justify-center items-center bg-sky-400 dark:bg-black">
      <Switch value={colorScheme === 'dark'} onChange={() => toggleColorScheme()} />
      <Text className="font-semibold text-xl dark:text-white">Open up App.js!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

