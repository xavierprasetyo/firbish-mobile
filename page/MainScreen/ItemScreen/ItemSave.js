import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  ScrollView,
} from 'react-native';
import { Button, IconButton } from '../../../components'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export default function ItemSave({ navigation }) {
  return (
    <View style={styles.container} > 
      <View style={styles.titleContainer}>
        <IconButton icon={ faChevronLeft } color="#000" iconSize={24} onPress={() => {navigation.goBack()}}/>
        <Text style={styles.title} >Sudah Siap?</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer} style= {styles.container}>
        <Text style={styles.title}>Under Construction :D</Text>
        <Button
          label="Lanjut"
          onPress={() => navigation.navigate('Home')}
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
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center'
  }, 
  title: {
    fontSize: 18,
    fontFamily: 'Poppins_700Bold'
  }
});

