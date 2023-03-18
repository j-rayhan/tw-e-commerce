import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-sky-400">
      <Text className="font-semibold text-xl">Open up App.js!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

