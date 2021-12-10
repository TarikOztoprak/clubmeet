import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import BottomBar from '../components/BottomBar';
const styles = StyleSheet.create({
  homescreen: {
    flex: 1,
    backgroundColor: '#F8E8E8'
  },
  btn:{
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderColor: '#ffffff',
    borderWidth: 1,
    padding: 10,
  },
  banner: {
    flex: 1,
    top: 0,
    backgroundColor: '#EF3939',
    width: '100%',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 30
  },
  input: {
    flex: 1,
   
  },
  txt: {
    flex: 1,
    fontSize: 30,
    color: '#ffffff'
  },
  chat: {
    flex:10
  }
});

export default function HomeScreen({navigation}) {
    return (
      <View style={styles.homescreen}>
        <View style={styles.banner}><Text style={styles.txt}>Club Name</Text></View>
        <View style={styles.chat}></View>
        <View style= {styles.input}>
          <TextInput
            style={styles.btn}
          />
        </View>
 
        <BottomBar styles={styles.input} navigation = {navigation}/>
   
      </View>
     
    );
}