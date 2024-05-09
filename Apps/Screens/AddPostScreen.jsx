import { ActivityIndicator, Button, Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { addDoc, collection, getDoc, getDocs, getFirestore } from "firebase/firestore"
import { app } from '../../FireBaseConfig'
import { Formik } from 'formik'
import {Picker} from '@react-native-picker/picker'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import * as ImagePicker from 'expo-image-picker';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useUser } from '@clerk/clerk-expo'
import Styles from '../../assets/styles/Styles'




const AddPostScreen = () => {


  const [image, setImage] = useState(null);
  const [categoryList, setCategoryList] = useState([])
  const [loading, setLoading] = useState(false)


  const {user} = useUser()
  const db = getFirestore(app)
  const storage = getStorage();
  
  const getCategoryList = async ()=>{

    setCategoryList([])

      const datas = await getDocs(collection(db, "category"))

      // datas.forEach((doc)=>{
      //   console.log('docs:' ,doc.data());
      //   setCategoryList(categoryList => [...categoryList, doc.data])
      //   // console.log(categoryList);
      // })

      const newCategoryList = datas.docs.map((doc) => doc.data());
      setCategoryList((prevCategoryList) => [...prevCategoryList, ...newCategoryList]);
      // console.log(categoryList);
  }


 //use to pick image from gallery

 const pickImage = async () => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  console.log(result);

  if (!result.canceled) {
    setImage(result.assets[0].uri);
  }
};

  
  
  useEffect(()=>{getCategoryList()},[])


  const onSubmitMethod = async(value) =>{

    setLoading(true)

    //convert image to blob file format
    const res = await fetch(image)
    const blob = await res.blob()
    const storageRef = ref(storage, 'communityPost/'+Date.now()+'.jpg');

    uploadBytes(storageRef, blob).then((snapshot) => {
      // console.log('Uploaded a blob or file!');
    }).then((res)=>{
      getDownloadURL(storageRef).then(async(downloadUrl)=>{
        // console.log(downloadUrl);

        value.image = downloadUrl
        value.userName = user.fullName
        value.userEmail = user.primaryEmailAddress.emailAddress
        value.userImage = user.imageUrl
        
        const docRef = await addDoc(collection(db, 'UserPost'), value)

        if(docRef.id){setLoading(false),ToastAndroid.show("post has been added Successfully", ToastAndroid.BOTTOM)}
      })
    });
  }

  return (
    <KeyboardAvoidingView>
        <ScrollView style={styles.body}>
          <Text style={styles.header}>Feedback</Text>
          <Text style={styles.desc}>Have any comments??</Text>
          <Formik 
            initialValues={{title:'', desc:'', category:'', address:'', price:'', userName:'', userEmail:'', userImage:''}}
            onSubmit={value=> onSubmitMethod(value)}
            validate={(values)=>{
              const errors = {}
              if(!values.title){
                console.log('no title');
                ToastAndroid.show("there's no title", ToastAndroid.BOTTOM)
              }
            }}
          >
              {({handleChange, handleBlur, handleSubmit, values, setFieldValue}) =>(
                <View style={styles.container}>
                    
                    <TouchableOpacity onPress={pickImage} style={{width:100}}>
                        {image?
                          <Image source={{uri: image}} style={styles.image}/>
                          :
                          <Image source={{uri: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg'}}
                            style={styles.image}/>

                        }
                        
                    </TouchableOpacity>

                    <TextInput 
                      style={styles.input} 
                      placeholder='Title' 
                      value={values?.title} 
                      onChangeText={handleChange('title')}/>
                

                    <TextInput 
                      style={styles.input} 
                      placeholder='Description'
                      numberOfLines={5}  
                      value={values?.desc} 
                      onChangeText={handleChange('desc')}/>
                

                    <TextInput 
                      style={styles.input} 
                      placeholder='price' 
                      value={values?.price}
                      keyboardType='number-pad' 
                      onChangeText={handleChange('price')}/>
                    
                    <TextInput 
                      style={styles.input} 
                      placeholder='address' 
                      value={values?.address}
                      onChangeText={handleChange('address')}/>
                
                    <View style={styles.picker}>
                        <Picker
                          selectedValue={values?.category}
                          onValueChange={itemValue => setFieldValue('category', itemValue)}>

                            {categoryList&&categoryList.map((item, index) =>(
                              <Picker.Item key={index} label={item.name} value={item.name}/>
                            ))}

                            
                        </Picker>
                    </View>
                    
                


                    <TouchableOpacity style={[styles.button, {backgroundColor:loading?'#ccc':'#fb8500'}]} onPress={handleSubmit} activeOpacity={0.8} disabled={loading}>

                      {loading?
                        <ActivityIndicator style={{color: '#ffff'}}/>
                        :
                        <Text style={styles.btnText}>Submit</Text>
                        
                      }
                    </TouchableOpacity>
                </View>
                
              )}
          </Formik>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default AddPostScreen

const styles = StyleSheet.create({
  body:{
    marginTop: 35,
    paddingHorizontal:30,
    padding: 10,
    backgroundColor: Styles.color.background,
    height: responsiveHeight(100)
  },
  header:{
    fontSize: 27,
    fontWeight: 'bold',
  },
  desc:{
    fontSize: 15,
    fontWeight: 'semibold',
    color: 'grey',
    marginBottom: 30,
  },
  image:{
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  input:{
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 17,
    fontSize: 15,
    marginTop: 10,
    textAlignVertical: 'top',
    borderColor: 'black'
  },
  picker: {
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 15,
    marginTop: 10,
    textAlignVertical: 'top',
    borderColor: 'black'
  },
  
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    marginTop: 20,
  },
  btnText:{
    color: 'white',
    fontWeight: 'bold',
  }
})