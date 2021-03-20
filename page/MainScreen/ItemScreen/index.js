import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ItemInput from './ItemInput'
import ItemCheck from './ItemCheck'
import ItemSave from './ItemSave'

const ItemStack = createStackNavigator()

export default function ItemScreen() {
  return (
    <ItemStack.Navigator
      initialRouteName="ItemInput"
			screenOptions={{
				headerShown: false
			}}
    >
    	<ItemStack.Screen name="ItemInput" component={ItemInput} />
      <ItemStack.Screen name="ItemCheck" component={ItemCheck} />
			<ItemStack.Screen name="ItemSave" component={ItemSave} />
    </ItemStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
