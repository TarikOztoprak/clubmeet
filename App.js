import * as React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ClubsScreen from './screens/ClubsScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import VoiceScreen from './screens/VoiceScreen';
import Announcements from './screens/Announcements';
const Stack = createNativeStackNavigator();


// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
function Content(){
  return(
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}>  
        <Stack.Screen name="Clubs" component={ClubsScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Voice" component={VoiceScreen} />
        <Stack.Screen name="Announcements" component={Announcements} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="Content" component={Content} />
      
      </Stack.Navigator>
  </NavigationContainer>
  );
}
