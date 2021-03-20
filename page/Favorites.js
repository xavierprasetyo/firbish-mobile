import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../components'

export default function Favorites({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Favorites</Text>
      <Button onPress={() => navigation.navigate('Home') } label='Home'/>
    </View>
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
