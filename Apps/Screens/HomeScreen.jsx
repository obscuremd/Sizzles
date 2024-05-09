import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Components/HomeScreen/Header'
import Styles from '../../assets/styles/Styles'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { app } from '../../FireBaseConfig'
import Categories from '../Components/Atoms/Categories'
import TopRated from '../Components/HomeScreen/TopRated'
import MostPopular from '../Components/HomeScreen/MostPopular'

const HomeScreen = ({data}) => {

  useEffect(()=>{
    getCategoryList()
    getSlides()
    getUserPost()
  },[])

  const [categoryList, setCategoryList] = useState([])
  const [slides, setSlides] = useState([])
  const [userPost, setUserPost] = useState([])

  const db = getFirestore(app);
  

  //get data from firebase
  const getSlides =async()=>{
    setSlides([])
    const data = await getDocs(collection(db, 'slider'))
    const newSlides = data.docs.map((doc)=> doc.data())
    setSlides((slides) => [...slides, ...newSlides])
  }

   //get category from firebase
  const getCategoryList = async ()=>{
    setCategoryList([])
    const datas = await getDocs(collection(db, "category"))
    const newCategoryList = datas.docs.map((doc) => doc.data());
    setCategoryList((prevCategoryList) => [...prevCategoryList, ...newCategoryList]);
  }
  
  const getUserPost = async ()=>{
    setUserPost([])
    const datas = await getDocs(collection(db, "UserPost"))
    const newUserPost = datas.docs.map((doc) => doc.data());
    setUserPost((prevUserPost) => [...prevUserPost, ...newUserPost]);
  }



  return (
    <ScrollView contentContainerStyle={{paddingHorizontal:20, paddingVertical:30, gap:40, backgroundColor:Styles.color.background}}>
      <Header/>
      
      <Categories data={categoryList}/>
      <TopRated data={userPost}/>
      <MostPopular data={userPost}/>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})