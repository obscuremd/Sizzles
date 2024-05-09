import { StyleSheet, Text, TextInput, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import React from 'react'

const Search = () => {
  return (
    <View style={styles.search}>
            <FontAwesome name="search" size={18} color={'#FFFFFF80'} />
            <TextInput 
              placeholder='Search For Meals . . .' 
              placeholderTextColor='#FFFFFF80'
              style={{width: '100%', color: 'white', fontFamily:'ClashDisplay-Medium',  }}/>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    search:{
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        borderRadius: 100,
        paddingHorizontal: 20,
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        borderWidth: 1,
        marginTop: 37,
       
        // borderColor: Styles.color.orange ,
    }
})