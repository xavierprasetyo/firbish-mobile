import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default function Button({ label, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
      >
        <Text style={styles.text} >
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4DCD53',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5
  },
  text:{
    color: '#fff',
    fontFamily: 'Poppins_500Medium',
    fontSize: 20
  }
});
