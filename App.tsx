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
  TouchableOpacity,
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
import Animated, {
  FadeIn,
  FadeInUp,
  FadeOut,
  Layout,
} from 'react-native-reanimated';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

type Item = {id: string};
const list: Item[] = new Array(5).fill('a').map((_, i) => ({id: '' + i}));

function ItemList(): JSX.Element {
  const [items, setItems] = React.useState<Item[]>(
    new Array(2).fill(0).map((_, i) => ({id: '' + i})),
  );

  const addItem = () => {
    setItems(prevItems => [{id: Date.now() + ''}, ...prevItems]);
  };
  const deleteItem = (itemID: string) => {
    setItems(prevItems => prevItems.filter(({id}) => id !== itemID));
  };
  console.log('PRINT IN %s=====>', 'App START ***', items);
  return (
    <View className="flex-1">
      {/* Add Button */}
      <TouchableOpacity
        className="w-20 bg-green-500 aspect-square rounded-full absolute bottom-5 right-5 z-10 justify-center"
        onPress={() => addItem()}>
        <Text className="text-center text-4xl font-extrabold text-white">
          +
        </Text>
      </TouchableOpacity>
      {/* Item list */}
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingVertical: 50}}>
        {items.map(({id}) => (
          <Animated.View
            key={id}
            entering={FadeIn}
            exiting={FadeOut}
            layout={Layout}
            onTouchEnd={() => deleteItem(id)}
            className="w-11/12 h-24 self-center rounded-2xl my-2 bg-blue-400">
            <Text className="text-center mt-7 text-2xl">{id}</Text>
          </Animated.View>
        ))}
      </ScrollView>
      {/* <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Animated.View
          entering={FadeIn}
          exiting={FadeOut}
          layout={Layout}
          onTouchEnd={() => deleteItem(item.id)}
          className="w-11/12 h-24 self-center rounded-2xl my-2 bg-blue-400">
            <Text className="text-center mt-7 text-2xl">{item.id}</Text>
          </Animated.View>
        )}
        style={{flex: 1}}
        contentContainerStyle={{paddingVertical: 50}}
      /> */}
    </View>
  );
}
function App(): JSX.Element {
  const {colorScheme, toggleColorScheme} = useColorScheme();
  const backgroundStyle = 'flex-1 bg-gray-50 dark:bg-black';
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
