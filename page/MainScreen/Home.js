import React from 'react';
import { StyleSheet, View, TextInput, SafeAreaView, Image } from 'react-native';
import { IconButton } from '../../components'
import { faHeart, faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons'

export default function Home({ navigation }) {
  const headerIconsize = 24
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background} />
      <View style={styles.headerContainer}>
        <TextInput 
           style={styles.input}
           placeholder="Search..."
        />
        <View  style={styles.IconContainer}>
          <IconButton icon= { faHeart } color="#fff" iconSize={headerIconsize} onPress={() => {navigation.navigate('Favorites')}}/>
          <IconButton icon= { faEnvelope } color="#fff" iconSize={headerIconsize} onPress={() => {navigation.navigate('Inbox')}}/>
          <IconButton icon= { faBell } color="#fff" iconSize={headerIconsize} onPress={() => {navigation.navigate('Notification')}} />
        </View>
      </View>
      <View style={styles.carouselContainer}>
        <Image style={styles.showcase} source={require('../../assets/showcase/1.jpg')}/>
      </View>
    </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column'
  },
  background: {
    backgroundColor: '#D0F3CF',
    width: '100%',
    height: '30%',
    position: 'absolute',
    top: 0,
    zIndex: -1
  }, 
  headerContainer:{
    marginTop: '15%',
    marginLeft: 30,
    marginRight: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  showcase:{
    width: '80%',
    resizeMode: 'contain',
    borderRadius: 15
  },
  carouselContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  IconContainer:{
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '20%'
  },
  input: {
    height: 40,
    width: '60%',
    padding: 10,
    marginRight: 10,
    backgroundColor: 'white',
    borderRadius: 10
  },
});
