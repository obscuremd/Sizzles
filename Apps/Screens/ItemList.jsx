import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { app } from '../../FireBaseConfig'
import Product from '../Components/Atoms/Product'
import { useNavigation } from '@react-navigation/native'
import Styles from '../../assets/styles/Styles'
import { Ionicons } from '@expo/vector-icons';



const ItemList = () => {

  const { params } = useRoute()

  const navigation = useNavigation()

  const db = getFirestore(app)
  const [itemList, setItemList] = useState([])

  const getItemList =async() =>{
    setItemList([])
    const q=query(collection(db, 'UserPost'),where('category', '==' , params.category))
    const data = await getDocs(q)
    
    data.docs.forEach((doc) => {
      setItemList(itemList=>[...itemList, doc.data()])
    });

  }

  useEffect(()=>{
    getItemList()
  },[])


  return (
    
    <ScrollView contentContainerStyle={{paddingHorizontal:20, paddingVertical:30, gap:20,backgroundColor: Styles.color.background, height: '100%'}}>
      <View>

        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Ionicons name="caret-back" size={24} color="white" />
        </TouchableOpacity>
        
        <View style={{flexDirection:'row',borderColor:Styles.color.white, borderWidth:1, padding:10, borderRadius:10, justifyContent:'center', alignContent:'center', marginHorizontal:100}}>
          <Text style={{color:Styles.color.white, fontFamily:'ClashDisplay-Bold'}}> {params.category}</Text>
        </View>

      </View>
      
      <FlatList
        data={itemList}
        numColumns={2}
        renderItem={({item,index})=>(
          <TouchableOpacity onPress={()=>navigation.navigate('Product-details', { data: item })}>
            <Product image={item.image} product={item.title} category={item.category} price={item.price} imageStyle={styles.image} detailStyle={styles.ProductDetails} ProductStyles={styles.Products}/>
          </TouchableOpacity>

      )}  
      />
    </ScrollView>
  )
}

export default ItemList

const styles = StyleSheet.create({
  Products:{
    flexDirection: 'column', // Use flexDirection: 'row' for horizontal grid
    flexWrap: 'wrap', // Allow items to wrap to the next row
    justifyContent: 'space-between', // Adjust as needed based on your design
    padding: 12, // Add padding for spacing between items
  },
image:{
    height: 124,
    width: 150,
    marginRight: 10,
    borderRadius: 16.18,
  },
  ProductDetails:{
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 10,
  },
})