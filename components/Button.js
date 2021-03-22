import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default function Button({ label, onPress, style }) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text} >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4DCD53',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10
  },
  text:{
    color: '#fff',
    fontFamily: 'Poppins_600SemiBold',
    letterSpacing: 1.5,
    fontSize: 20
  }
});
