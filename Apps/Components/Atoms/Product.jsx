import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Styles from '../../../assets/styles/Styles';
import React, { createContext, useContext } from 'react'
import { CartContext } from '../../../Context/CartContex';



const Product = ({image,product,category,price, imageStyle,detailStyle, ProductStyles}) => {

  const { addToCart } =useContext(CartContext)

  const handleAddToCart = () => {
    addToCart(product.id);
  };

  return (
    <View>
      <View style={ProductStyles}>

          {/* Product image */}
          <Image source={{uri: image}} style={imageStyle}/>

          {/* Product Details */}             
          <View style={detailStyle}>
          
              <View>
                  <Text style={styles.text_medium}>{product}</Text>
                  <Text style={styles.text_regular}>{category}</Text>
                  <Text style={styles.price}>₦{price}</Text>
              </View>

              {/* Add to cart */}
              <TouchableOpacity style={styles.addToCart} activeOpacity={0.7} onPress={handleAddToCart}>
                  <AntDesign name="plus" size={24} color="#FFFFFF" />
              </TouchableOpacity>

    
          </View>
      
      </View>
    
    </View>
  )
}

export default Product

const styles = StyleSheet.create({
  
    addToCart:{
        width: 30,
        height: 30,
        borderRadius: 16,
        backgroundColor: 'rgba(243, 113, 71, 0.50)',
        backdropFilter: 'blur(2px)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      text_medium:{
        fontSize:10, 
        color:'#FFFFFF', 
        textTransform:'capitalize',
        fontFamily: 'ClashDisplay-Medium'
      },
      text_regular:{
        fontSize:10, 
        color:'#FFFFFF', 
        textTransform:'capitalize',
        fontFamily: 'ClashDisplay-Regular'
      },
      price:{
        fontSize:10, 
        color:'#FFFFFF', 
        textTransform:'capitalize',
        fontFamily: 'ClashDisplay-Bold',
        color:Styles.color.orange
      }
})