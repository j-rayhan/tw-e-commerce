import * as React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import products from '../../utils/data'

const ProductCard = ({ title, image, description, price, category }) => {
  const [count, setCount] = React.useState(1)
  const handleCount = (type) => {
    if (type === 'add') {
      setCount((prevState) => prevState + 1)
    }
    if (type === 'minus') {
      setCount((prevState) => (prevState > 1 ? prevState - 1 : 0))
    }
  }
  return (
    <TouchableOpacity className='w-full bg-white dark:bg-gray-50/10 rounded-3xl p-5 my-3'>
      <View className='rounded-3xl'>
        <Image
          source={{ uri: image }}
          className='w-full h-72 rounded-3xl'
          resizeMode='contain'
        />
      </View>
      <View className='mt-5'>
        <Text className='text-sm text-black/60 dark:text-white/70'>
          {category}
        </Text>
        <Text className='text-lg font-semibold dark:text-white'>{title}</Text>
        <View className='flex-row items-center justify-between my-2'>
          <View className='flex-row items-center gap-3'>
            <TouchableOpacity
              className='bg-black/10 dark:bg-white w-10 h-10 items-center rounded-3xl'
              onPress={() => handleCount('add')}
            >
              <Text className='font-semibold text-3xl'>+</Text>
            </TouchableOpacity>
            <Text className='dark:text-white text-2xl'>{count}</Text>
            <TouchableOpacity
              className='bg-black/10 dark:bg-white w-10 h-10 items-center rounded-3xl'
              onPress={() => handleCount('minus')}
            >
              <Text className='font-semibold text-3xl'>-</Text>
            </TouchableOpacity>
          </View>
          <Text className='text-2xl font-extrabold dark:text-white'>
            $ {price}
          </Text>
        </View>
        <Text numberOfLines={2} className='text-sm text-black/60 dark:text-white/70'>{description}</Text>
      </View>
      <TouchableOpacity className='bg-black dark:bg-white p-4 rounded-3xl w-10/12 self-center mt-3'><Text className='text-white text-center dark:text-black font-bold'>Add to Cart</Text></TouchableOpacity>
    </TouchableOpacity>
  )
}

const ProductList = () => {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => `${item.id}`}
      renderItem={({ item }) => <ProductCard {...item} />}
      contentContainerStyle={{paddingHorizontal: 14}}
    />
  )
}

export default ProductList
