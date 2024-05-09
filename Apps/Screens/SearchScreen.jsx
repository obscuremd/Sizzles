import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Categories from '../Components/Atoms/Categories'
import Search from '../Components/Atoms/Search'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { app } from '../../FireBaseConfig'
import Results from '../Components/Search/Results'
import Header from '../Components/HomeScreen/Header'



export default function SearchScreen() {

  const [categoryList, setCategoryList] = useState([])
  const [userPost, setUserPost] = useState([])

  const db = getFirestore(app);


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

  useEffect(()=>{

    getCategoryList()
    getUserPost()
  },[])


  return (
    <ScrollView contentContainerStyle={{paddingHorizontal:20, paddingVertical:30, gap:20,}}>
      <Search/>
      <Categories data={categoryList}/>
      <Results data={userPost}/>
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  
})