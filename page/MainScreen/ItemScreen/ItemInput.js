import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ItemInput({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>ItemInput</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('ItemCheck')}
      />
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
