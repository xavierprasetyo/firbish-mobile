import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_500Medium, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import MainScreen from './page/MainScreen'
import Inbox from './page/Inbox'
import Favorites from './page/Favorites'
import Notification from './page/Notification'

const MainStack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <MainStack.Navigator
         initialRouteName="Main"
         screenOptions={{
           headerShown: false
         }}
      >
        <MainStack.Screen name="Main" component={MainScreen} />
        <MainStack.Screen name="Inbox" component={Inbox} />
        <MainStack.Screen name="Favorites" component={Favorites} />
        <MainStack.Screen name="Notification" component={Notification} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
