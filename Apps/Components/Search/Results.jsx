import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Product from '../Atoms/Product'

const Results = ({data}) => {

  const sortedData = [...data].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <ScrollView>
      {/* Products */}
      <FlatList
        data={sortedData}
        numColumns={2}
        renderItem={({item,index})=>(
            <Product image={item.image} product={item.title} category={item.category} price={item.price} imageStyle={styles.image} detailStyle={styles.ProductDetails} ProductStyles={styles.Products}/>
      )}  
      />
    </ScrollView>
  )
}

export default Results

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
        paddingHorizontal:5
      },
})