import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {useAuth, useUser} from '@clerk/clerk-expo'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Settings from '../Components/ProfileScreen/Settings';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const ProfileScreen = () => {

  const { user } = useUser()
  const { isLoaded,signOut } = useAuth();

  // Check if user data is loaded and available
  if (!isLoaded || !user) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={{justifyContent:'center', alignItems:'center'}}>

      {/* first profile */}
      <View style={{paddingTop:93, alignItems:'center'}}>
        {/* profile pic */}
        <Image source={{uri: user.imageUrl}} style={styles.profilePic}/>
          {/* name and email */}
        <View style={{alignItems:'center', marginTop:21}}>
          <Text style={styles.userName}>{user.fullName}</Text>
          <Text style={styles.email}>{user.primaryEmailAddress.emailAddress}</Text>
        </View>
      </View>

      {/* second profile */}
      <View style={{marginTop:21}}>
        {/* header: personal info*/}
        <Text style={styles.Header}>Personal info</Text> 
        {/* detalis */}
        <View style={styles.details}>
          
          <View style={styles.personalDetails}>
            <Text style={styles.text_big}>Gender</Text>
            <Text style={styles.text_small}>Female</Text>
          </View>

          <View style={styles.line}/>
          
          <View style={styles.personalDetails}>
            <Text style={styles.text_big}>Nationality</Text>
            <Text style={styles.text_small}>Nigeria</Text>
          </View>

          <View style={styles.line}/>
          
          <View style={styles.personalDetails}>
            <Text style={styles.text_big}>D.O.B</Text>
            <Text style={styles.text_small}>17-09-2021</Text>
          </View>

        </View> 
      </View>

      {/* settings */}
      <View style={{marginTop:46}}>
        {/* Header: settings */}
        <Text style={styles.Header}>Settings</Text>

        {/* options */}
        <View style={{gap:9, marginTop:18}}>
         
          {/* favorites */}
          <Settings 
            icon={<AntDesign name="hearto" size={20} color="white" />}
            text={'Your Favorite'}
            />
         
          {/* Tell a friend */}
          <Settings 
            icon={<Feather name="send" size={20} color="white" />}
            text={'Tell a Friend'}
            />
         
          {/* settings */}
          <Settings 
            icon={<AntDesign name="setting" size={20} color="white" />}
            text={'Settings'}
            />
         
          {/* reports a bug */}
          <Settings 
            icon={<Entypo name="bug" size={20} color="white" />}
            text={'Report a bug'}
            />
        </View>

      </View>
      
      {/* sign out */}
      <TouchableOpacity onPress={()=>{signOut()}} style={styles.options}>
        <View style={{flexDirection:'row', alignItems:'center'}}>         
              {/* icon */}
              <View style={styles.icons}>
                <FontAwesome name="sign-out" size={24} color="white" />                
              </View>
              {/* text */}
              <Text style={styles.text_xl_big}>Sign out</Text>
          </View>
              
      </TouchableOpacity>
    </ScrollView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  profilePic:{
    height: 109,
    width: 103,
    borderRadius: 100
  },
  userName:{
    color: '#FFF',
    fontFamily: "ClashDisplay-Bold",
    fontSize: 19.998,
    textTransform: 'capitalize'
  },
  email:{
    color: '#FFF',
    fontFamily: "ClashDisplay-Regular",
    fontSize: 7.639,
    textTransform: 'capitalize'
  },
  Header:{
    fontSize: 12.362,
    color: '#FFF',
    fontFamily: "ClashDisplay-Regular",
  },
  details:{
    marginTop: 21,
    width:320, 
    height:64, 
    backgroundColor:'#FFFFFF1A', 
    borderRadius:10, 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap:40
  },
  line:{
    backgroundColor: '#D9D9D9',
    height: 40,
    width: 1
  },
  personalDetails: {
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  text_big:{
    color: '#FFF',
    fontFamily: "ClashDisplay-Bold",
    fontSize: 7.639,
    textTransform: 'capitalize'
  },
  text_small:{
    color: '#FFF',
    fontFamily: "ClashDisplay-Regular",
    fontSize: 7.639,
    textTransform: 'capitalize'
  },
  options:{
    flexDirection: 'row',
    width: 150,
    padding: 7,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:'rgba(255, 255, 255, 0.10)',
    borderRadius: 10,
    marginTop:21
},
icons:{
    width: 33,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    backgroundColor:'#C12E00',
    borderRadius: 6.18,
    marginRight: 17
},
text_xl_big:{
    color: '#FFF',
    fontFamily: "ClashDisplay-Bold",
    fontSize: 12.362,
    textTransform: 'capitalize',
    color:'#C12E00'
},
  
})