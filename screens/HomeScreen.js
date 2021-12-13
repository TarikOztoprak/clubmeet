import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import BottomBar from '../components/BottomBar';

export default function HomeScreen({route, navigation}) {
    const { name } = route.params;
    return (
      <View style={styles.homescreen}>
        
        <View style={styles.banner}><Text style={styles.txt}>{name}</Text></View>
        
        <View style={styles.chat}></View>
        
        <View style= {styles.input}>
          <TextInput
            style={styles.btn}
          />
          <TouchableOpacity style={styles.send}>
            <Text style={styles.txt}>↑</Text>
          </TouchableOpacity>
        </View>
 
        <BottomBar styles={styles.input} navigation = {navigation}/>
   
      </View>
     
    );
}

const styles = StyleSheet.create({
  homescreen: {
    flex: 1,
    backgroundColor: '#F8E8E8'
  },
  btn:{
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderColor: '#ffffff',
    borderWidth: 1,
    padding: 10,
    width:'90%'
  },
  banner: {
    flex: 1,
    backgroundColor: '#EF3939',
    width: '100%',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 30,
    fontSize: 30,
    paddingTop: 30
  },
  input: {
    flexDirection: 'row'
  },
  txt: {
    flex: 1,
    fontSize: 30,
    color: '#ffffff'
  },
  chat: {
    flex:10
  },
  send:{
    backgroundColor: '#9BCCBA',
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 10,
    width: '10%'
  }
});
