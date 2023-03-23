import * as React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styled} from 'nativewind';
import Animated, {
  FadeIn,
  FadeOut,
  Layout,
  RollOutRight,
} from 'react-native-reanimated';
import products from '../utils/data';

const StyledView = styled(View);
const StyledText = styled(Text);

export const ProductCard = ({title, image, description, price, category}) => {
  const [count, setCount] = React.useState(1);
  const handleCount = type => {
    if (type === 'add') {
      setCount(prevState => prevState + 1);
    }
    if (type === 'minus') {
      setCount(prevState => (prevState > 1 ? prevState - 1 : 0));
    }
  };
  return (
    <Animated.View
      layout={Layout}
      entering={FadeIn}
      exiting={RollOutRight}
      className="w-full bg-white dark:bg-gray-50/10 rounded-3xl p-5 my-3">
      <StyledView className="rounded-3xl">
        <Image
          source={{uri: image}}
          className="w-full h-72 rounded-3xl"
          resizeMode="contain"
        />
      </StyledView>
      <StyledView className="mt-5">
        <StyledText className="text-sm text-black/60 dark:text-white/70">
          {category}
        </StyledText>
        <Text className="text-lg font-semibold dark:text-white">{title}</Text>
        <View className="flex-row items-center justify-between my-2">
          <View className="flex-row items-center gap-3">
            <TouchableOpacity
              className="bg-black/10 dark:bg-white w-10 h-10 items-center rounded-3xl"
              onPress={() => handleCount('add')}>
              <Text className="font-semibold text-3xl">+</Text>
            </TouchableOpacity>
            <Text className="dark:text-white text-2xl">{count}</Text>
            <TouchableOpacity
              className="bg-black/10 dark:bg-white w-10 h-10 items-center rounded-3xl"
              onPress={() => handleCount('minus')}>
              <Text className="font-semibold text-3xl">-</Text>
            </TouchableOpacity>
          </View>
          <Text className="text-2xl font-extrabold dark:text-white">
            $ {price}
          </Text>
        </View>
        <Text
          numberOfLines={2}
          className="text-sm text-black/60 dark:text-white/70">
          {description}
        </Text>
      </StyledView>
      <TouchableOpacity className="bg-black dark:bg-white p-4 rounded-3xl w-10/12 self-center mt-3">
        <Text className="text-white text-center dark:text-black font-bold">
          Add to Cart
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const ProductList = () => {
  const [items, setItems] = React.useState(products);
  const handleAdd = () => {
    const randomIndex = Math.floor(Math.random() * 9) + 1;
    setItems([{...products[randomIndex], id: Date.now()}, ...items]);
  };
  const handleDelete = () => setItems([...items.slice(1)]);
  return (
    <View className="flex-1">
      {/* Buttons */}
      <View className="flex-row justify-between items-center mx-4 my-2">
        <TouchableOpacity
          className="bg-green-300 py-3 px-10 rounded-2xl"
          onPress={() => handleAdd()}>
          <Text className="font-semibold text-xl">Add</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-red-400 py-3 px-10 rounded-2xl"
          onPress={() => handleDelete()}>
          <Text className="font-semibold text-xl text-white">Delete</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{paddingHorizontal: 14}}>
        {items.map(item => (
          <ProductCard key={item.id} {...item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ProductList;
