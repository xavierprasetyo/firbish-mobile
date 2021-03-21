import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';

export default function ItemCard({ name, price, desc, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.center}
        onPress={onPress}
      >
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../assets/Logo.png')}/>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.itemName} >{name}</Text>
          <Text style={styles.itemPrice} >{price}</Text>
          <Text style={styles.itemDesc} >{desc}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 10,
    height: 350,
    width: 170,
    marginVertical: 20,
    marginHorizontal: 10,
    shadowColor: "#000",
    elevation: 6,
  },
  imageContainer:{
    width: '100%',
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image:{
    height: 100,
    width: 100,
    resizeMode: 'contain'
  },
  center:{
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  textContainer:{
    paddingHorizontal: 10,
    backgroundColor: '#F8F8F8',
    width: '100%',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    paddingVertical: 10,
  },
  itemName:{
    color: '#000',
    fontFamily: 'Poppins_400Regular',
    fontSize: 13,
  },
  itemPrice:{
    color: '#000',
    fontFamily: 'Poppins_700Bold',
    fontSize: 15,
  },
  itemDesc:{
    color: '#000',
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  }
});
