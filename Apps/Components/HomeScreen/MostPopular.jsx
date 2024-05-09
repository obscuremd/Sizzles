import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import Styles from '../../../assets/styles/Styles';
import { useNavigation } from '@react-navigation/native'


const MostPopular = ({data}) => {

  const navigation = useNavigation()
  

  return (
    <View>

        {/* Header */}
      <Text style={styles.header}>Most Popular</Text>

      {/* Products */}
      <FlatList
        data={data}
        renderItem={({item,index})=>(
          <TouchableOpacity
            style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center', marginBottom:16}} 
            onPress={()=>navigation.navigate('Product-details', { data: item })}>
            
            {/* product details */}
            <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
              
                  {/* Product image */}
                  <Image source={{uri: item.image}} style={styles.image}/>


                  <View style={{gap:3}}>
                          
                        {/* details */}
                        <Text 
                          style={{fontSize:10, color:'#FFFFFF', textTransform:'capitalize', fontFamily: 'ClashDisplay-Medium'}}>{item.title}</Text>
                        <Text 
                          style={{fontSize:10, color:'#FFFFFF', textTransform:'capitalize', fontFamily: 'ClashDisplay-Regular'}}>{item.category}</Text>

                         {/* Stars */}
                       <View style={{flexDirection:'row', gap:2}}>
                          <AntDesign name="star" size={8} color={Styles.color.orange} />
                         <AntDesign name="star" size={8} color={Styles.color.orange} />
                         <AntDesign name="star" size={8} color={Styles.color.orange} />
                         <AntDesign name="star" size={8} color={Styles.color.orange} />
                         <AntDesign name="star" size={8} color={Styles.color.orange} />
                     </View>
                          
                       {/* price */}
                       <View style={styles.price}>
                           <Text 
                            style={{fontSize:10, color:Styles.color.orange, textTransform:'capitalize', fontFamily: 'ClashDisplay-Bold'}}>₦{item.price}</Text>
                       </View>
                       
                  </View>

            </View>

            {/* Add to cart */}
            <TouchableOpacity style={styles.addToCart}>
              <AntDesign name="plus" size={24} color="#FFFFFF" />
            </TouchableOpacity>

          </TouchableOpacity>
                
      )}  
      />
    </View>
  )
}

export default MostPopular

const styles = StyleSheet.create({
    header:{
        color: '#FFF',
        fontFamily: "Clash Display",
        fontSize: 12.362,
        textTransform: 'capitalize',
        marginBottom: 9,
        fontFamily: 'ClashDisplay-Medium'
      },
      Products:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 16,
        width: '100%',


      },
      image:{
        height: 80,
        width: 80,
        marginRight: 10,
        borderRadius: 16.18,
      },
      ProductDetails:{
        flexDirection: 'row',
        alignItems: 'flex-start',
      },
      price:{
        marginTop:10
      },
      addToCart:{
        width: 30,
        height: 30,
        borderRadius: 16,
        backgroundColor: 'rgba(243, 113, 71, 0.50)',
        backdropFilter: 'blur(2px)',
        justifyContent: 'center',
        alignItems: 'center',
      }
})