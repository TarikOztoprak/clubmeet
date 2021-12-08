import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import BottomBar from '../components/BottomBar';
const styles = StyleSheet.create({
  homescreen: {
    flex: 1,
    backgroundColor: '#F8E8E8'
  },
  btn:{
    position: 'absolute',
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
    flex: 1,
    position: 'absolute',
    top: 0,
    backgroundColor: '#EF3939',
    height: '10%',
    width: '100%',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 30
  },
  input: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  txt: {
    fontSize: 30,
    color: '#ffffff'
  },
});

export default function HomeScreen({navigation}) {
    return (
      <View style={styles.homescreen}>
        <View style={styles.banner}><Text style={styles.txt}>Club Name</Text></View>
        <View style= {styles.input}>
          <TextInput
            style={styles.btn}
          />
        </View>
        <View style= {styles.input}>
          <BottomBar navigation = {navigation}/>
        </View>
      </View>
     
    );
}