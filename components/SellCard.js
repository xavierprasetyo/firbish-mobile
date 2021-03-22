import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default function SellCard({ label, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.center}
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
    backgroundColor: '#EBEBEB',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
    height: 70,
    width: 140,
    marginBottom: 10,
    marginHorizontal: 5
  },
  center:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: '#000',
    fontFamily: 'Poppins_400Regular',
    fontSize: 13,
    textAlign: 'center'
  }
});
