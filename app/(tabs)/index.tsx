import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

export default function Home() {
  const [search, setSearch] = useState('');

  const performSearch = () => {
    alert(`Searching for ${search}`);
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Search' }} />
      <View className="flex-row gap-3 p-3">
        <TextInput
          value={search}
          onChangeText={(text) => setSearch(text)}
          placeholder="Search for a product"
          className="flex-1 rounded border border-gray-300 bg-white p-3"
        />
        <Pressable onPress={performSearch} className=" rounded bg-teal-600 p-3">
          <Text>Search</Text>
        </Pressable>
      </View>
    </>
  );
}
