import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ClubsScreen from './screens/ClubsScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import VoiceScreen from './screens/VoiceScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ3V4FbjEAxOD1_JXl1Zl9o6xZ97vV4ag",
  authDomain: "clubmeet-8dbdd.firebaseapp.com",
  databaseURL: "https://clubmeet-8dbdd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "clubmeet-8dbdd",
  storageBucket: "clubmeet-8dbdd.appspot.com",
  messagingSenderId: "101108413205",
  appId: "1:101108413205:web:a8a12893c488916b98af1c",
  measurementId: "G-1X821L19QE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function App() {
  const [isLogin, setIsLogin] = React.useState(false);
  return (
    <NavigationContainer>
    <Tab.Navigator
    screenOptions={{
      headerShown: false
    }}>
        {isLogin ? (
        <>
          <Stack.Screen name="Clubs" component={ClubsScreen} />
          <Stack.Screen name="Chat" component={HomeScreen} />
          <Stack.Screen name="Voice" component={VoiceScreen} />
        </> 
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Sign Up" component={SignUpScreen} />
        </>
      )}
    </Tab.Navigator>
  </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9BCCBA'
  },
  auth: {
    flex: 1,
    backgroundColor: '#F8E8E8',
    borderRadius: 100,
    width: 300
  },
  flex1: {
    flex: 1
  },
  flex2: {
    flex: 2
  },
  homescreen: {
    flex: 1,
    backgroundColor: '#F8E8E8'
  },
  btn:{
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderColor: '#ffffff',
    height: 40,
    width: '96%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  banner: {
    position: 'absolute',
    top: 0,
    backgroundColor: '#EF3939',
    height: '10%',
    width: '100%',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 30
  }
});

