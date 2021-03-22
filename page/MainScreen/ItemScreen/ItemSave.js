import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  ScrollView,
} from 'react-native';
import { Button, IconButton, SellCard } from '../../../components'
import { faChevronLeft, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export default function ItemSave({ navigation }) {
  return (
    <View style={styles.container} > 
      <View style={styles.titleContainer}>
        <IconButton icon={ faChevronLeft } color="#000" iconSize={24} onPress={() => {navigation.goBack()}}/>
        <Text style={styles.title} >Sudah Siap?</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <SellCard
          name='Apple iPhone 7, Hitam'
          category='Apple, iPhone, Smartphone'
          price= '3.500.000,-'
          dropOff= 'Rabu, 17 Maret 2021'
        />
         <SellCard
          name='Samsung Galaxy S21'
          category='Samsung, Android, Smartphone'
          price= '13.500.000,-'
          dropOff= 'Rabu, 17 Maret 2021'
        />
        <TouchableOpacity style={styles.addContainer} onPress={() => navigation.navigate('ItemInput')}>
          <FontAwesomeIcon icon={ faPlusCircle } color={'#4C4752'} size={ 25 } />
          <Text style={styles.addLabel}>Tambah Produk</Text>
        </TouchableOpacity>
        <View style={styles.progressContainer}>
          <View style={[styles.circle]}/>
          <View style={[styles.circle]}/>
          <View style={[styles.circle, styles.active]}/>
        </View>
        <Button
          label="Simpan dan ajukan"
          onPress={() => navigation.navigate('Home')}
          style={{
            width: '80%',
            marginTop: 20,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            elevation: 6,
            fontFamily: 'Poppins_700Bold'
          }}
        />
      </ScrollView>
    </View>

    
  );
}
const circleSize = 10
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '8%',
    width: '100%',
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingTop: 15,
    paddingBottom: 15,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
  },
  titleContainer: {
    backgroundColor: '#D0F3CF',
    width: '100%',
    paddingBottom: 10,
    paddingTop: 50,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center'
  }, 
  title: {
    fontSize: 18,
    fontFamily: 'Poppins_700Bold'
  },
  progressContainer: {
    width: '10%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addContainer: {
    width: '100%',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addLabel:{
    fontFamily: 'Poppins_500Medium',
    marginTop: 7,
    fontSize: 17,
    color: '#828282'
  },
  circle: {
    backgroundColor: '#C4C4C4',
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize/2
  },
  active: {
    backgroundColor: '#4DCD53',
  }
});

