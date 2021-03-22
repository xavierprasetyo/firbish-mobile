import React, { useState} from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  ScrollView,
} from 'react-native';
import { Button, IconButton } from '../../../components'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import CalendarPicker from 'react-native-calendar-picker';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
 
export default function ItemCheck({ navigation }) {
  const [check, setCheck] = useState(0)
  const radioItem = [
    {label: 'Drop-off di Furbish warehouse', value: 0},
    {label: 'Pick-up ke rumah', value: 1},
  ]
  const onPress = (e) => {
    setCheck(e)
  }
  return (
    <View style={styles.container} > 
      <View style={styles.titleContainer}>
        <IconButton icon={ faChevronLeft } color="#000" iconSize={24} onPress={() => {navigation.goBack()}}/>
        <Text style={styles.title} >Metode Pemeriksaan</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style= {styles.imageContainer}>
          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>Jenis Pemeriksaan</Text>
          </View>
          <View style={styles.imageContent}>
          <RadioForm
              animation={true}
            >
              {/* To create radio buttons, loop through your array of options */}
              {
                radioItem.map((obj, i) => (
                  <RadioButton labelHorizontal={true} key={i} >
                    {/*  You can set RadioButtonLabel before RadioButtonInput */}
                    <RadioButtonInput
                      obj={obj}
                      index={i}
                      isSelected={check === i}
                      onPress={onPress}
                      borderWidth={1}
                      buttonInnerColor={'#4DCD53'}
                      buttonOuterColor={check === i ? '#4DCD53' : '#4DCD53'}
                      buttonSize={20}
                      buttonOuterSize={30}
                      buttonStyle={{}}
                      buttonWrapStyle={{marginRight: 10, marginVertical: 5}}
                    />
                    <RadioButtonLabel
                      obj={obj}
                      index={i}
                      labelHorizontal={true}
                      onPress={onPress}
                      labelStyle={{fontSize: 15, color: '#000', fontFamily: 'Poppins_400Regular',}}
                      labelWrapStyle={{}}
                    />
                  </RadioButton>
                ))
              }  
            </RadioForm>
          </View>
        </View>
      
        <View style= {styles.calendarContainer}>
          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>Jadwalin yuk!</Text>
          </View>
          <View style={styles.calendarContent}>
          <CalendarPicker
            width={350}
          />
          </View>
        </View>
        <View style= {styles.progressContainer}>
          <View style={[styles.circle]}/>
          <View style={[styles.circle, styles.active]}/>
          <View style={[styles.circle]}/>
        </View>
        <Button
          label="Lanjut"
          onPress={() => navigation.navigate('ItemSave')}
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
    paddingHorizontal: 10,
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
  imageContent: {
    marginTop: 10,
    flexDirection: 'row',
  },
  progressContainer: {
    width: '10%',
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  calendarContainer: {
    width: '85%',
    marginTop: 20,
    justifyContent: 'center',
  },
  calendarContent: {
   marginTop: 10,
   width: '100%'
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

