import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
export default function IconButton({ icon, onPress, color, iconSize, style }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style]}
    >
      <FontAwesomeIcon icon={ icon } color={color} size={ iconSize } />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
