import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Apps/Screens/LoginScreen';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import TabNavigation from './Apps/Navigations/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import Styles from './assets/styles/Styles';
import CartContextProvider from './Context/CartContex';
import { useFonts } from 'expo-font';



export default function App() {

  const font = useFonts({
    'ClashDisplay-Bold': require('./assets/Fonts/ClashDisplay-Bold.otf'),
    'ClashDisplay-ExtraLight': require('./assets/Fonts/ClashDisplay-Extralight.otf'),
    'ClashDisplay-Light': require('./assets/Fonts/ClashDisplay-Light.otf'),
    'ClashDisplay-Medium': require('./assets/Fonts/ClashDisplay-Medium.otf'),
    'ClashDisplay-Regular': require('./assets/Fonts/ClashDisplay-Regular.otf'),
    'ClashDisplay-SemiBold': require('./assets/Fonts/ClashDisplay-Semibold.otf'),
  });


  return (
    
    <ClerkProvider publishableKey='pk_test_dG9wcy1tYWdwaWUtMC5jbGVyay5hY2NvdW50cy5kZXYk'>
      <StatusBar hidden={true} />
        <View style={styles.container}>
          
          <StatusBar style="auto" />

          <SignedIn>
            <NavigationContainer>
              <CartContextProvider>
                <TabNavigation/>
              </CartContextProvider>
            </NavigationContainer>  
          </SignedIn>
          
          <SignedOut>
            <LoginScreen/>
          </SignedOut>
      
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
