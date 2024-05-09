import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient';
import Styles from '../../assets/styles/Styles';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



const ProductDetails = () => {

  const navigation = useNavigation()
  const [showFullText, setShowFullText] = useState(false);
  const [quantity, setQuantity] = useState(0)


  const { params } = useRoute()
  // console.log(params);

  return (
    <ScrollView style={{backgroundColor: Styles.color.background, }}>

      <TouchableOpacity style={{position:'absolute', zIndex:1, top:15, left:15}} onPress={()=>navigation.goBack()}>
        <Ionicons name="caret-back" size={24} color="white" />
      </TouchableOpacity>

      {/* image & gradient  */}
      <Image source={{uri: params.data.image}} style={{width: '100%', height: 319}}/>
      <LinearGradient colors={['#00000000', '#1E1F24']} style={styles.gradient}/>

      {/* quantity button */}
      <View style={{justifyContent:'center', alignItems:'center'}}>       
        <View style={styles.quantity_btn}>
          
          <TouchableOpacity onPress={()=>{setQuantity(quantity + 1)}} style={{width:50, height:20, justifyContent:'center', alignItems:'center',}}>
            <AntDesign name="plus" size={15} color="white" />
          </TouchableOpacity>
          
          <Text style={styles.small_white_text}>{quantity}</Text>
          
          <TouchableOpacity onPress={()=>{setQuantity(quantity - 1)}}  style={{width:50,height:20, justifyContent:'center', alignItems:'center'}}>
            <AntDesign name="minus" size={15} color="white" />
          </TouchableOpacity>
          
        </View>
      </View>
          
    {/* description */}
      <View style={{paddingHorizontal:19, marginTop: 41}}>  

       {/*price, name, category  */}
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>

          <View style={{gap:8}}>
              <Text style={styles.big_white_text}>{params.data.title}</Text>
              <Text style={styles.small_white_text}>{params.data.category}</Text>
            </View>    
              <Text style={{fontSize:19.999, color:Styles.color.orange, fontFamily: 'ClashDisplay-Medium'}}>₦{params.data.price}</Text>
        </View>

        {/* more info */}
        <View style={{flexDirection:'row', gap: 66, alignItems:'center', justifyContent:'center', marginTop:69 }}>
            
            {/* rating */}
            <View style={{flexDirection:'row', gap: 4, alignItems:'center', }}>
              <AntDesign name="star" size={12} color={Styles.color.orange} />
              <Text style={styles.small_white_text}>4.5</Text>
            </View>
            
            {/* calories */}
            <View style={{flexDirection:'row', gap: 4, alignItems:'center', }}>
              <FontAwesome5 name="fire" size={12} color={Styles.color.orange} />
              <Text style={styles.small_white_text}>{params.data.price} k/cal </Text>
            </View>
            
            {/* time */}
            <View style={{flexDirection:'row', gap: 4, alignItems:'center', }}>
              <AntDesign name="clockcircle" size={12} color={Styles.color.orange} />
              <Text style={styles.small_white_text}>5-10 mins</Text>
            </View>
         
        </View>

          {/* description */}
        <View style={{marginTop:57}}>
            <Text style={styles.small_white_text} numberOfLines={showFullText ? undefined : 5}>{params.data.desc}</Text>

            {showFullText?
            <TouchableOpacity onPress={()=>setShowFullText(false)}>
                <Text style={{fontSize:12.361, color:Styles.color.orange, fontFamily: 'ClashDisplay-Medium'}}>show less</Text>
              </TouchableOpacity>
            :
              <TouchableOpacity onPress={()=>setShowFullText(true)}>
                <Text style={{fontSize:12.361, color:Styles.color.orange, fontFamily: 'ClashDisplay-Medium'}}>Read More</Text>
              </TouchableOpacity>
            }
            
        </View>

            {/* Add to cart */}
        <View style={{justifyContent:'center', alignItems:'center', paddingTop:41}}>

              <TouchableOpacity 
              activeOpacity={0.8} 
              style={{width:293, padding:10, backgroundColor:'#F37147', borderRadius:16.18, justifyContent:'center', alignItems:'center'}}>
                
                <Text style={{fontSize:19.999, color:'white', fontFamily: 'ClashDisplay-SemiBold'}}>Add To Cart</Text>
              
              </TouchableOpacity>
           
        </View>
      
      </View>
      


    </ScrollView>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  gradient:{
    width: '100%', 
    height: 319,
    position: 'absolute'
  },
  quantity_btn:{
    width: 150,
    height: 40, 
    backgroundColor:'#F37147', 
    borderRadius:10, 
    flexDirection:'row', 
    justifyContent:'center', 
    alignItems:'center', 
    gap:12
  },
  big_white_text:{
    fontSize:19.999, 
    color:'white',
    fontFamily: 'ClashDisplay-Medium'
  },
  small_white_text:{
    fontSize:12.361, 
    color:'white',
    fontFamily: 'ClashDisplay-Regular'
  }
})