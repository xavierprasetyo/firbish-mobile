import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ItemInput from './ItemInput'
import ItemCheck from './ItemCheck'
import ItemSave from './ItemSave'
import { useEffect } from 'react/cjs/react.development';
import moment from 'moment';
import 'moment/locale/id'

const ItemStack = createStackNavigator()
moment.locale('id')

export default function ItemScreen() {
  const [ name, setName ] = useState('')
  const [ cat, setCat ] = useState('')
  const [ price, setPrice ] = useState('')
  const [ purchaseDate, setPurchaseDate ] = useState()
  const [ type, setType ] = useState(0)
  const [ pickDate, setPickDate ] = useState()
  const [ addr, setAddr ] = useState()

  const [ item, setItem ] = useState([])

  useEffect(() => {
    // fetch here
  }, [])

  const filterItem = (item) => {
    const convertDate = (date) => {
      return moment(date).format('dddd, D MMM YYYY')
    }
    return {
      name: item.name,
      category: item.category,
      price: item.price,
      dropOff: convertDate(item.pickDate)
    }
  }

  const postItem = async () => {
    const newItem = {
      name,
      category: cat,
      price,
      purchaseDate,
      type,
      pickDate,
      address: addr
    }
    console.log(newItem)
    //post to axios

    const addItem = filterItem(newItem)
    setItem([...item, addItem])
   
  }
  return (
    <ItemStack.Navigator
      initialRouteName="ItemSave"
			screenOptions={{
				headerShown: false
			}}
    >
    	<ItemStack.Screen name="ItemInput">
        {(props) => 
          <ItemInput
            {...props}
            name={name}
            setName={setName}
            cat={cat}
            setCat={setCat}
            price={price}
            setPrice={setPrice}
            setPurchaseDate={setPurchaseDate}
          />
        }
      </ItemStack.Screen>
      <ItemStack.Screen name="ItemCheck">
        {(props) => 
          <ItemCheck
            {...props}
            type={type}
            setType={setType}
            pickDate={pickDate}
            setPickDate={setPickDate}
            addr={addr}
            setAddr={setAddr}
            postItem={postItem}
          />
        }
      </ItemStack.Screen>
			<ItemStack.Screen name="ItemSave">
        {(props) => 
          <ItemSave
            {...props} 
            items={item}
          />
        }
      </ItemStack.Screen>
    </ItemStack.Navigator>
  );
}
