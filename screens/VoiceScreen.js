import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from "./LoginScreen"
const styles = StyleSheet.create({
  homescreen: {
    flex: 1,
    backgroundColor: '#F8E8E8',
    alignItems: 'center'
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
    width: '70%',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: '30px',
    borderRadius: 100,
    marginTop: 30
  }
});

export default function VoiceScreen() {
    return (
      <View style={styles.homescreen}>
        <TouchableOpacity style={styles.banner}>Duyurular</TouchableOpacity>
        <TextInput
          style={styles.btn}
        />
      </View>
     
    );
}

 
