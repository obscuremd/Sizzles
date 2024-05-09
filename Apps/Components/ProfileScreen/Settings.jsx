import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';


const Settings = ({icon, text}) => {
  return (
    <TouchableOpacity style={styles.options}>
        
        <View style={{flexDirection:'row', alignItems:'center'}}>         
            {/* icon */}
            <View style={styles.icons}>
                {icon}
              
            </View>
            {/* text */}
            <Text style={styles.text_xl_big}>{text}</Text>
        </View>
            
        <Ionicons name="caret-forward" size={15} color="white"/>

    </TouchableOpacity>
  )
}

export default Settings

const styles = StyleSheet.create({
    options:{
        flexDirection: 'row',
        width: 320,
        padding: 7,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:'rgba(255, 255, 255, 0.10)',
        borderRadius: 10,
  },
    icons:{
        width: 33,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        backgroundColor:'#F37147',
        borderRadius: 6.18,
        marginRight: 17
  },
    text_xl_big:{
        color: '#FFF',
        fontFamily: "ClashDisplay-Medium",
        fontSize: 12.362,
        textTransform: 'capitalize'
  },
})