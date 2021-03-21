import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  ScrollView,
} from 'react-native';
import { Button } from '../../../components'

export default function ItemInput({ navigation }) {
  return (
    <View style={styles.container} > 
      <View style={styles.titleContainer}>
        <Text style={styles.title} >Deskripsi Produk Elektronik</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer} style= {styles.container}>
        <Text style={styles.title}>Under Construction :D</Text>
        <Button
          label="Lanjut"
          onPress={() => navigation.navigate('ItemCheck')}
        />
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
    paddingTop: 50,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  }, 
  title: {
    fontSize: 18,
    fontFamily: 'Poppins_700Bold'
  }
});

