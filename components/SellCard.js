import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTag, faTrash, faEye,  faPen } from '@fortawesome/free-solid-svg-icons'
import IconButton from './IconButton'

export default function SellCard({ id, name, category, price, pickDate, type, deleteItem }) {
  const iconSize = 20
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.showcase} source={require('../assets/showcase/1.jpg')}/>
        <Image style={styles.showcase} source={require('../assets/showcase/1.jpg')}/>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameLabel}>{name}</Text>
      </View>
      <View style={styles.categoryContainer}>
        <Text style={styles.catLabel} >{category}</Text>
      </View>
      <View style={styles.priceContainer}>
        <FontAwesomeIcon icon={ faTag } color={'#4C4752'} size={ 15 } />
        <Text style={styles.priceLabel}>Rp {price}</Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.timeLabel} >Jadwal {type === 0 ? 'Drop-off' : 'Pick-up'} : {pickDate}</Text>
      </View>
      <View style={styles.iconContainer}>
        <IconButton style={styles.iconBtn} icon={ faEye } color="#828282" iconSize={iconSize}/>
        <IconButton style={styles.iconBtn} icon={ faPen } color="#828282" iconSize={iconSize}/>
        <IconButton style={styles.iconBtn} icon={ faTrash } color="#828282" iconSize={iconSize} onPress={(e) => deleteItem(id)}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
    width: '90%',
    marginVertical: 10,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    paddingLeft: 30
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
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    marginTop: 5
  },
  nameContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 5
  },
  categoryContainer: {
    marginTop: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#E7E7E7',
    borderRadius: 10,
    maxWidth: '80%'
  },
  priceContainer: {
    marginTop: 10,
    flexDirection: 'row',
    paddingHorizontal: 5,
    alignItems: 'center'
  },
  timeContainer: {
    marginTop: 10,
    flexDirection: 'row',
    paddingHorizontal: 5,
    alignItems: 'center'
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: 5
  },
  nameLabel: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 16,
  },
  catLabel: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },
  priceLabel: {
    marginLeft: 5,
    fontFamily: 'Poppins_500Medium',
    fontSize: 15,
  },
  timeLabel:{
    fontFamily: 'Poppins_700Bold',
    fontSize: 15,
    color: '#4DCD53'
  },
  showcase: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
    marginRight: 5,
    borderRadius: 5
  },
  iconBtn:{
    marginRight: 5
  }
});
