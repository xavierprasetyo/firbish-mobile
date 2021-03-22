import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faShoppingCart, faMoneyBillWave, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Home from './Home';
import ItemScreen from './ItemScreen';
import ShoppingCart from './ShoppingCart';
import Profile from './Profile';

const TabStack = createBottomTabNavigator();

export default function MainScreen() {
  return (
    <TabStack.Navigator 
			initialRouteName="ItemInput"
			screenOptions={{
				headerShown: false
			}}
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color }) => {
					let icon
					switch (route.name) {
						case 'Home':
							icon = faHome
							break;
						case 'ItemInput':
							icon = faMoneyBillWave
							break;
						case 'ShoppingCart':
							icon = faShoppingCart
							break;
						case 'Profile':
							icon = faUserCircle
							break;
						default:
							break;
					}
					// You can return any component that you like here!
					return <FontAwesomeIcon icon={ icon } color={color} size={ 25 } />;
				},
				tabBarLabel: () => {
					let label
					switch (route.name) {
						case 'Home':
							label = 'Home'
							break;
						case 'ItemInput':
							label = 'Jual'
							break;
						case 'ShoppingCart':
							label = 'Keranjang'
							break;
						case 'Profile':
							label = 'Akun'
							break;
						default:
							break;
					}
					return <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: 12 }} >{label}</Text> 
				}
			})}
			tabBarOptions={{
				activeTintColor: '#3CD691',
				inactiveTintColor: '#4C4752',
				keyboardHidesTabBar: true,
				style: { 
					height: 65,
					borderTopRightRadius: 20,
					borderTopLeftRadius: 20
				}
			}}
		>
			<TabStack.Screen name="Home" component={Home} />
			<TabStack.Screen name="ShoppingCart" component={ShoppingCart} />
			<TabStack.Screen name="ItemInput" component={ItemScreen} />   
			<TabStack.Screen name="Profile" component={Profile} />
    </TabStack.Navigator>
  );
}

const styles = StyleSheet.create({

});
