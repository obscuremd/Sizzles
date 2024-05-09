import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser.tsx";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from '@clerk/clerk-expo';
import Styles from '../../assets/styles/Styles.jsx';



WebBrowser.maybeCompleteAuthSession();



const LoginScreen = () => {


    useWarmUpBrowser();
 
   
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });


    const onPress = React.useCallback(async () => {
        try {
          const { createdSessionId, signIn, signUp, setActive } =
            await startOAuthFlow();
     
          if (createdSessionId) {
            setActive({ session: createdSessionId });
          } else {
            // Use signIn or signUp for next steps such as MFA
          }
        } catch (err) {
          console.error("OAuth error", err);
        }
      }, []);



  return (
    <View style={{paddingTop:20, backgroundColor:Styles.color.background, height:'100%', alignItems:'center'}} >
        <Image
            resizeMode='contain'
            source={{
                uri: 'https://www.civicus.org/images/2023/12/11/illustrations-02.png'
            }}
            style={styles.image}
        />

        <View style={styles.text}>
            <Text style={styles.text2}>Sizzles</Text>
            <Text style={styles.text3}>Unearth Hidden Culinary Gems and Savor the Essence of Tradition in Every Bite.</Text>
            <Text style={styles.text3}> Are You Ready to Catch the Next Wave of Innovation?</Text>
        </View>
            
        <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={onPress}>
            <Text style={styles.btnText}>Get Started</Text>
        </TouchableOpacity>

    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
 
    image: {
        width: '100%',
        height: 400,
    },

    text:{
        paddingTop:20,
        paddingHorizontal:20,
        paddingVertical: 15,
        // justifyContent: 'center',
        alignItems: 'center',

    },
    
    text2:{
        fontSize: 50,
        // fontWeight: 'bold',
        fontFamily: 'ClashDisplay-Bold',
        color: Styles.color.orange,
        marginBottom:0,


    },
    
    text3:{
        fontSize: 11.36,
        // fontWeight: 'semibold',
        color: 'grey',
        textAlign: 'center',
        color: 'white',
        fontFamily: 'ClashDisplay-Medium',
    },

    button:{
        padding: 15,
        backgroundColor: Styles.color.orange,
        borderRadius: 100,
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20%',
        // marginVertical: 100
    },

    btnText:{
        fontSize:18.39,
        color: 'white',
        fontFamily: 'ClashDisplay-SemiBold',
    }
})