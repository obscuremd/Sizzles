import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import ItemList from '../Screens/ItemList';
import Styles from '../../assets/styles/Styles';
import ProductDetails from '../Screens/ProductDetails';


const Stack = createStackNavigator();

const HomeScreenStackNavigation = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false, 
        tabBarActiveTintColor:Styles.color.orange, 
        tabBarStyle: { backgroundColor: Styles.color.background, borderTopWidth: 0, height:52 }}}            
      sceneContainerStyle={{backgroundColor: Styles.color.background}}>

      <Stack.Screen name="Home-screen" component={HomeScreen} />
      <Stack.Screen name="Item-list" component={ItemList} options={({ route }) => ({title: route.params.category})}/>
      <Stack.Screen name="Product-details" component={ProductDetails}/>
    
    </Stack.Navigator>
  )
}

export default HomeScreenStackNavigation

const styles = StyleSheet.create({})