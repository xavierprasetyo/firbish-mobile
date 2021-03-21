import React, { useEffect } from 'react';
import { 
  StyleSheet, 
  View, 
  TextInput, 
  Text, 
  Image, 
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  FlatList 
} from 'react-native';
import { IconButton, CategoryCard, ItemCard } from '../../components'
import { faHeart, faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons'

export default function Home({ navigation }) {
  const headerIconsize = 24
  const catArray = [
    'Charger',
    'Smartphone',
    'Rumah Tangga',
    'Laptop & Komputer',
    'Audio',
    'Kamera'
  ]
  const itemArray = [
    {
      name: 'Barang 1',
      price: 'Rp 1.000.000',
      desc: 'Lorem ipsum syalalala. Lorem ipsum syalalala. Lorem ipsum syalalala..'
    },
    {
      name: 'Barang 2',
      price: 'Rp 1.000.000',
      desc: 'Lorem ipsum syalalala. Lorem ipsum syalalala. Lorem ipsum syalalala..'
    },
    {
      name: 'Barang 3',
      price: 'Rp 1.000.000',
      desc: 'Lorem ipsum syalalala. Lorem ipsum syalalala. Lorem ipsum syalalala..'
    },
    {
      name: 'Barang 4',
      price: 'Rp 1.000.000',
      desc: 'Lorem ipsum syalalala. Lorem ipsum syalalala. Lorem ipsum syalalala..'
    },{
      name: 'Barang 5',
      price: 'Rp 1.000.000',
      desc: 'Lorem ipsum syalalala. Lorem ipsum syalalala. Lorem ipsum syalalala..'
    },
    {
      name: 'Barang 6',
      price: 'Rp 1.000.000',
      desc: 'Lorem ipsum syalalala. Lorem ipsum syalalala. Lorem ipsum syalalala..'
    }
  ]
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} >
      <View style={styles.background} />
      <View style={styles.headerContainer}>
        <TextInput 
           style={styles.input}
           placeholder="Cari Barang..."
        />
        <View style={styles.IconContainer}>
          <IconButton icon={ faHeart } color="#fff" iconSize={headerIconsize} onPress={() => {navigation.navigate('Favorites')}}/>
          <IconButton icon={ faEnvelope } color="#fff" iconSize={headerIconsize} onPress={() => {navigation.navigate('Inbox')}}/>
          <IconButton icon={ faBell } color="#fff" iconSize={headerIconsize} onPress={() => {navigation.navigate('Notification')}} />
        </View>
      </View>
      <View style={styles.carouselContainer}>
        <Image style={styles.showcase} source={require('../../assets/showcase/1.jpg')}/>
      </View>
      <View style={styles.categoryContainer}>
        <View style={styles.categoryHeader}>
          <Text style={styles.sectionTitle}>
            Kategori
          </Text>
          <TouchableOpacity>
            <Text style={styles.readMore}>
              Lihat Semua
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.categoryMain} contentContainerStyle={styles.contentScrollH} horizontal showsHorizontalScrollIndicator={false}>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{alignSelf: 'flex-start'}}
                numColumns={catArray.length / 2}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={catArray}
                renderItem={({ item, index }) => {
                  return <CategoryCard label={item} />
                }}
            />
        </ScrollView>
      </View>
      <View style={styles.categoryContainer}>
        <View style={styles.categoryHeader}>
          <Text style={styles.sectionTitle}>
            Terakhir Dilihat
          </Text>
          <TouchableOpacity>
            <Text style={styles.readMore}>
              Lihat Semua
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.categoryMain} contentContainerStyle={styles.contentScrollH} horizontal showsHorizontalScrollIndicator={false}>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{alignSelf: 'flex-start'}}
                numColumns={itemArray.length / 2}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={itemArray}
                renderItem={({ item: { name, price, desc}, index }) => {
                  return <ItemCard name={name} price={price} desc={desc} />
                }}
            />
        </ScrollView>
      </View>
      <View style={styles.categoryContainer}>
        <View style={styles.categoryHeader}>
          <Text style={styles.sectionTitle}>
            Mungkin kamu suka...
          </Text>
          <TouchableOpacity>
            <Text style={styles.readMore}>
              Lihat Semua
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.categoryMain} contentContainerStyle={styles.contentScrollH} horizontal showsHorizontalScrollIndicator={false}>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{alignSelf: 'flex-start'}}
                numColumns={itemArray.length / 2}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={itemArray}
                renderItem={({ item: { name, price, desc}, index }) => {
                  return <ItemCard name={name} price={price} desc={desc} />
                }}
            />
        </ScrollView>
      </View>
      </ScrollView>
    </KeyboardAvoidingView> 
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '8%',
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
  background: {
    backgroundColor: '#D0F3CF',
    width: '100%',
    height: 250,
    position: 'absolute',
    top: 0,
    zIndex: -1
  }, 
  headerContainer:{
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  showcase:{
    width: '100%',
    resizeMode: 'contain',
    borderRadius: 15,
    height: '100%'
  },
  carouselContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 200,
    marginTop: 20
  },
  IconContainer:{
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    height: 40,
    width: '65%',
    padding: 10,
    marginRight: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    fontFamily: 'Poppins_400Regular'
  },
  categoryContainer: {
    marginTop: 20,
    width: '100%'
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal:20
  },
  sectionTitle: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 19
  },
  readMore: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 13,
    textDecorationLine: 'underline',
    color: '#4DCD53'
  },
  categoryMain:{
    marginTop: 10,
  },
  contentScrollH:{
    paddingHorizontal: 20
  }
});
