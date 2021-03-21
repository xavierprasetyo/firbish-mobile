import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
export default function IconButton({ icon, onPress, color, iconSize }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
      >
        <FontAwesomeIcon icon={ icon } color={color} size={ iconSize } />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
