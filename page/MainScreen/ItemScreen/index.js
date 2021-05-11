import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ItemInput from './ItemInput'
import ItemCheck from './ItemCheck'
import ItemSave from './ItemSave'
import moment from 'moment';
import axios from 'axios'
import 'moment/locale/id'

const ItemStack = createStackNavigator()
moment.locale('id')

const publicIP = 'http://23.99.100.15:8080'
//const devURL = 'http://192.168.1.7:8080'

const url = publicIP


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
    axios.get(url + '/item').then(res => {
      tempItem = []
      res.data.forEach(element => {
        tempItem.push(filterItem(element))
      })
      setItem(tempItem)
    })
  }, [])

  const flushData = () => {
    setName('')
    setCat('')
    setPrice('')
    setPurchaseDate(null)
    setType(0)
    setPickDate(null)
    setAddr(null)
  }

  const filterItem = (item) => {
    const convertDate = (date) => {
      return moment(date).format('dddd, D MMM YYYY')
    }
    return {
      id: item.id,
      name: item.name,
      category: item.category,
      price: item.price,
      type: item.type,
      pickDate: convertDate(item.pickDate)
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
    
    axios.post(url + '/item', newItem).then(res => {
      newItem.id = res
      const addItem = filterItem(newItem)
      setItem([...item, addItem])
      flushData()
    })
  }

  const deleteItem = async (id) => {
    axios.post(url + '/item/delete', { id }).then(res => {
      const tempItem = item.filter(e => e.id !== id)
      setItem(tempItem)
    })
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
            deleteItem={deleteItem}
          />
        }
      </ItemStack.Screen>
    </ItemStack.Navigator>
  );
}
