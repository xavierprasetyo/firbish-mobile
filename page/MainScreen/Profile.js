import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  ScrollView,
} from 'react-native';
import { IconButton } from '../../components'
import { faHeart, faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Profile({ navigation }) {
  const headerIconsize = 24
  return (
    <View style={styles.container} > 
      <View style={styles.titleContainer}>
        <Text style={styles.title} >Akun Saya</Text>
        <View style={styles.iconContainer}>
          <IconButton icon={ faHeart } color="#fff" iconSize={headerIconsize} onPress={() => {navigation.navigate('Favorites')}}/>
          <IconButton icon={ faEnvelope } color="#fff" iconSize={headerIconsize} onPress={() => {navigation.navigate('Inbox')}}/>
          <IconButton icon={ faBell } color="#fff" iconSize={headerIconsize} onPress={() => {navigation.navigate('Notification')}} />
        </View>
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
  iconContainer:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '35%'
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins_700Bold'
  }
});

