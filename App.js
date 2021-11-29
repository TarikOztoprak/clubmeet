import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ClubsScreen from './screens/ClubsScreen';
import VoiceScreen from './screens/VoiceScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [isLogin, setIsLogin] = React.useState(true);
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
          <Stack.Screen name="Sign Up" component={LoginScreen} />
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

