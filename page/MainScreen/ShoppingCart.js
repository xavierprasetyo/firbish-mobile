import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  ScrollView,
} from 'react-native';
import { IconButton } from '../../components'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function ShoppingCart({ navigation }) {
  return (
    <View style={styles.container} > 
      <View style={styles.titleContainer}>
        <Text style={styles.title} >Keranjang</Text>
        <IconButton icon={ faHeart } color="#fff" iconSize={24} onPress={() => {navigation.navigate('Favorites')}}/>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer} style= {styles.container}>
        <Text style={styles.title}>Under Construction :D</Text>
      </ScrollView>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '8%',
    width: '100%',
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingTop: 15,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
  },
  titleContainer: {
    backgroundColor: '#D0F3CF',
    width: '100%',
    paddingBottom: 10,
    paddingTop: 30,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  }, 
  title: {
    fontSize: 20,
    fontFamily: 'Poppins_700Bold'
  }
});

