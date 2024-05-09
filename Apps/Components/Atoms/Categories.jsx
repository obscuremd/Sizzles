import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveWidth } from 'react-native-responsive-dimensions'
import { useNavigation } from '@react-navigation/native'
import Styles from '../../../assets/styles/Styles'

const Categories = ({data}) => {

  const navigation = useNavigation()

  return (
    <View style={styles.container} >
      <FlatList
      horizontal={true}
        data={data}
        renderItem={(({item, index})=>(
            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('Item-list', { category: item.name })}>

              <Text 
                style={{color: 'white' , textTransform:'capitalize', fontSize:12.362, fontFamily:'ClashDisplay-Medium'}}>{item.name}</Text>
            </TouchableOpacity>
        ))}
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#FFFFFF80',
    width: '100%',
    paddingVertical: 15,
    // paddingHorizontal: '8%',
    display: 'flex',
    alignItems: 'center', // Align items in the center horizontally
    justifyContent: 'center', // Align items in the center vertically
  },
  btn: {
    marginHorizontal: 18, // Adjust the margin as needed
    height: '100%', // Make sure the TouchableOpacity takes up the full height
  },
})