import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'nativewind'
import { SafeAreaView, Switch, Text, View } from 'react-native'
import ProductList from './src/components/ProductList';

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <SafeAreaView className='flex-1 justify-center items-center bg-gray-50 dark:bg-black'>
      <View className='flex-row w-full gap-5'>
        <Text className='font-semibold text-xl dark:text-white'>
          New Connection!
        </Text>
        <Switch
          value={colorScheme === 'dark'}
          onChange={() => toggleColorScheme()}
        />
      </View>
      <ProductList />
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </SafeAreaView>
  )
}
