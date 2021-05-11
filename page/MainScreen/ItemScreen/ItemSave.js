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

export default function ItemSave({ 
  navigation,
  items,
  deleteItem
}) {
  return (
    <View style={styles.container} > 
      <View style={styles.titleContainer}>
        <IconButton icon={ faChevronLeft } color="#000" iconSize={24} onPress={() => {navigation.navigate('Home')}}/>
        <Text style={styles.title} >Penjualan</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity style={styles.addContainer} onPress={() => navigation.navigate('ItemInput')}>
          <FontAwesomeIcon icon={ faPlusCircle } color={'#4C4752'} size={ 25 } />
          <Text style={styles.addLabel}>Tambah Produk</Text>
        </TouchableOpacity>
        {items.map((item) => (
           <SellCard
            key={item.id}
            id={item.id}
            name={item.name}
            category={item.category}
            price={item.price}
            pickDate={item.pickDate}
            type={item.type}
            deleteItem={deleteItem}
          />
        ))}
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

