import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import Styles from '../../../assets/styles/Styles';
import Product from '../Atoms/Product';
import { useNavigation } from '@react-navigation/native'


const TopRated = ({data}) => {

  const navigation = useNavigation()


  // Function to generate a random sorting order
  const randomSortOrder = () => Math.random() - 0.5;

  // Shuffle the data array using the random sorting order
  const shuffledData = [...data].sort(randomSortOrder);


  return (
    <View >

      {/* Header */}
      <Text style={styles.header}>Top rated specials</Text>

      {/* Products */}
      <FlatList
        data={shuffledData}
        horizontal={true}
        renderItem={({item,index})=>(
          <TouchableOpacity onPress={()=>navigation.navigate('Product-details', { data: item })}>
            <Product image={item.image} product={item.title} category={item.category} price={item.price} imageStyle={styles.image} detailStyle={styles.ProductDetails} ProductStyles={styles.Products}/>
          </TouchableOpacity>

      )}  
      />
    </View>
  )
}

export default TopRated

const styles = StyleSheet.create({
  header:{
    color: '#FFF',
    fontFamily: "Clash Display",
    fontSize: 12.362,
    fontWeight: '500',
    textTransform: 'capitalize',
    marginBottom: 9,
    fontFamily: 'ClashDisplay-Medium'
  },
  Products:{
    alignItems: 'center',
    gap: 12
  },
  image:{
    height: 124,
    width: 245,
    marginRight: 10,
    borderRadius: 16.18,
  },
  ProductDetails:{
    // paddingHorizontal:50,
    flexDirection: 'row',
    gap: 131
  },
  
})