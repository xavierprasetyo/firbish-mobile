import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ItemCheck({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>ItemCheck</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('ItemSave')}
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
