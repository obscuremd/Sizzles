import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import AddPostScreen from '../Screens/AddPostScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Styles from '../../assets/styles/Styles';
import SearchScreen from '../Screens/SearchScreen';
import {useUser} from '@clerk/clerk-expo'
import HomeScreenStackNavigation from './HomeScreenStackNavigation';


const Tab = createBottomTabNavigator();

const TabNavigation = () => {

  const {user} = useUser()

  return (
        <View style={styles.container} >
          
          <Tab.Navigator 
            screenOptions={{
              headerShown: false, 
              tabBarActiveTintColor:Styles.color.orange, 
              tabBarStyle: { backgroundColor: Styles.color.background, borderTopWidth: 0, height:52 }}}            
            sceneContainerStyle={{backgroundColor: Styles.color.background}}>
            
            
                <Tab.Screen name='home' component={HomeScreenStackNavigation} 
                  options={{
                    tabBarLabel:()=> null,
                    tabBarIcon:({color, size})=>(
                      <AntDesign name="home" size={20} color={color} />
                    )
                  }}/>
                
                <Tab.Screen name='search' component={SearchScreen}
                
                options={{
                  tabBarLabel:()=> null,
                  tabBarIcon:({color, size})=>(
                    <FontAwesome name="search" size={20} color={color} />
                  )
                }}/>
                
                {/* <Tab.Screen name='add post' component={AddPostScreen} 
                  options={{
                    tabBarLabel:()=> null,
                    tabBarIcon:({color, size})=>(
                      <AntDesign name="plus" size={20} color={color} />
                    )
                  }}/> */}
                
                <Tab.Screen name='profile' component={ProfileScreen} 
                  options={{
                    tabBarLabel:()=> null,
                    tabBarIcon:({color, size})=>(
                      <Image source={{uri: user.imageUrl}} style={{height:20, width:20, borderRadius:50}}/>
                    )
                  }}/>
          
          
          </Tab.Navigator>
        
        </View>
  )
}

export default TabNavigation

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: Styles.color.background
  }
})