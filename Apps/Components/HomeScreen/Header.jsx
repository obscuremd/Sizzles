import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import {useUser} from '@clerk/clerk-expo'
import Styles from '../../../assets/styles/Styles';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { AntDesign } from '@expo/vector-icons';
import Search from '../Atoms/Search';
import Logo from '../../../assets/sizzles.png'


const Header = () => {

    const {user} = useUser()



  return (
    <View >
 
        <View style={styles.body}>
                {/* menu  */}
                <AntDesign name="menuunfold" size={12} color="white" />

                {/* logo */}
                <View 
                  style={styles.logo}>
                  <Image
                    resizeMode='contain' 
                    source={Logo} style={{width:11, height:11, justifyContent:'center'}}/>
                  <Text style={{color:'#FFF', fontSize:7.64, fontFamily:'ClashDisplay-Medium'}}>Sizzles</Text>
                </View>
                
                  {/* profile */}
                <Image source={{uri: user.imageUrl}} style={styles.profile}/>
        </View>
       
       
        <View style={{width:202 ,height:responsiveHeight(15)}}>
            <Text style={{color:'#FFF', fontSize:19.998, fontFamily:'ClashDisplay-Medium', textTransform:'capitalize', marginTop: 37}}>
                discover a brand
                new world of 
                flavors with <Text style={{color:Styles.color.orange}}>Sizzles</Text>
            </Text>
        </View>
        

      {/* search bar */}

        <Search/>


    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    body:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        color: 'white',
        justifyContent: 'space-between',
        
    },
    profile:{
        borderRadius:100,
        width: 16,
        height: 16,
    },
    logo:{
        width:80, 
        height:19, 
        backgroundColor:'#F5F5F51A', 
        flexDirection:'row',
        paddingLeft:11,
        gap:8, 
        alignItems:'center', 
        borderRadius:19
  }
   
})