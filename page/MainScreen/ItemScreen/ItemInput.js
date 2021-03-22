import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { Button } from '../../../components'
import CalendarPicker from 'react-native-calendar-picker';

export default function ItemInput({ navigation }) {
  return (
    <View style={styles.container} > 
      <View style={styles.titleContainer}>
        <Text style={styles.title} >Deskripsi Produk Elektronik</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style= {styles.imageContainer}>
          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>Foto Barang</Text>
            <Text style={[styles.labelText, styles.labelReq]}>*</Text>
          </View>
          <View style={styles.imageContent}>
            <Image style={styles.showcase} source={require('../../../assets/showcase/1.jpg')}/>
            <Image style={styles.showcase} source={require('../../../assets/showcase/1.jpg')}/>
            <TouchableOpacity style={styles.imageAdd}>
              <Text style={styles.plusSign}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style= {styles.nameContainer}>
          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>Nama Barang</Text>
            <Text style={[styles.labelText, styles.labelReq]}>*</Text>
          </View>
          <View style={styles.nameContent}>
            <TextInput 
              style={styles.input} 
              placeholder='Isi nama produkmu disini...' 
              placeholderTextColor='#C4C4C4'
            />
          </View>
        </View>
        <View style= {styles.categoryContainer}>
          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>Kategori</Text>
            <Text style={[styles.labelText, styles.labelReq]}>*</Text>
          </View>
          <View style={styles.categoryContent}>
            <TextInput 
              style={styles.input} 
              placeholder='Isi kategori produkmu disini...' 
              placeholderTextColor='#C4C4C4'
            />
          </View>
        </View>
        <View style={styles.priceContainer}>
          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>Harga Barang</Text>
            <Text style={[styles.labelText, styles.labelReq]}>*</Text>
          </View>
          <View style={styles.priceContent}>
            <Text style={styles.currency}>Rp</Text>
            <TextInput
              keyboardType='numeric'
              style={styles.input} 
              placeholder='Usulkan harga jual elektronikmu' 
              placeholderTextColor='#C4C4C4'
            />
          </View>
        </View>
        <View style= {styles.calendarContainer}>
          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>Tanggal Pembelian</Text>
          </View>
          <View style={styles.calendarContent}>
          <CalendarPicker
            width={350}
          />
          </View>
        </View>
        <View style= {styles.progressContainer}>
          <View style={[styles.circle, styles.active]}/>
          <View style={[styles.circle]}/>
          <View style={[styles.circle]}/>
        </View>
        <Button
          label="Lanjut"
          onPress={() => navigation.navigate('ItemCheck')}
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
    width: '100%',
    paddingBottom: 30,
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
  },
  imageContainer: {
    width: '85%',
    marginTop: 10,
    justifyContent: 'center',
  },
  labelContainer: {
    flexDirection: 'row',
    fontFamily: 'Poppins_700Bold',
    fontSize: 15,
  },
  labelText: {
    flexDirection: 'row',
    fontFamily: 'Poppins_700Bold',
    fontSize: 16,
  },
  labelReq:{
    color: '#F50000'
  },
  imageContent: {
    marginTop: 10,
    flexDirection: 'row',
  },
  showcase: {
    width: 90,
    height: 90,
    resizeMode: 'cover',
    marginRight: 20,
    borderRadius: 10
  },
  imageAdd: {
    width: 90,
    height: 90, 
    borderRadius: 10,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  plusSign: {
    fontFamily: 'Poppins_400Regular',
    color: '#828282',
    fontSize: 20
  },
  nameContainer: {
    width: '85%',
    marginTop: 20,
    justifyContent: 'center',
  },
  nameContent: {
    borderBottomWidth: 1,
    borderColor: '#828282',
    paddingVertical: 4
  },
  input: {
    fontFamily: 'Poppins_400Regular',
  },
  categoryContainer: {
    width: '85%',
    marginTop: 20,
    justifyContent: 'center',
  },
  calendarContainer: {
    width: '85%',
    marginTop: 20,
    justifyContent: 'center',
  },
  priceContainer: {
    width: '85%',
    marginTop: 20,
    justifyContent: 'center',
  },
  progressContainer: {
    width: '10%',
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryContent: {
    borderBottomWidth: 1,
    borderColor: '#828282',
    paddingVertical: 4
  },
  priceContent: {
    borderBottomWidth: 1,
    borderColor: '#828282',
    paddingVertical: 4,
    flexDirection: 'row'
  },
  calendarContent: {
   marginTop: 10,
   width: '100%'
  },
  currency: {
    color: '#B2B2B2',
    marginRight: 5,
    fontFamily: 'Poppins_700Bold',
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

