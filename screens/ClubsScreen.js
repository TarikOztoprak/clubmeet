import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Channel from '../components/Channel';
import BottomBar from '../components/BottomBar'
import { auth } from '../firebase';

export default function ClubsScreen({navigation}) {
    return (
      <View style={styles.homescreen}>
        <View style={styles.banner}><Text style={styles.txt}>Clubs</Text></View>
        
        <Text>{auth.currentUser?.email}</Text>
        <Text>{auth.currentUser?.uid}</Text>
        
        {/* <TouchableOpacity style={styles.create}><Text style={styles.txt}>+ Create Club</Text></TouchableOpacity> */}
        
        <View style= {styles.row}>
          <TextInput style= {styles.input}
              placeholder="Club Code"
          />
          <TouchableOpacity style={styles.create}><Text style={styles.txt}>Join</Text></TouchableOpacity>
        </View>
        
        <Channel><Text style={styles.txt}>Kitap Kulubü</Text></Channel>
        <Channel><Text style={styles.txt}>Satranç Kulubü</Text></Channel>
        
        <BottomBar navigation = {navigation}/>
      </View>
     
    );
}

const styles = StyleSheet.create({
  homescreen: {
    flex: 1,
    backgroundColor: '#9BCCBA',
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
    top: 0,
    backgroundColor: '#EF3939',
    height: '10%',
    width: '100%',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 30,
    fontSize: 30
  },
  create:{
    flex: 1,
    backgroundColor: '#EF3939',
    color: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    fontSize: 30,
  },
  txt: {
    fontSize: 30,
    color: '#ffffff'
  },
  row:{
    flexDirection: 'row',
    marginBottom: 20,
    width: '90%'
  },
  input:{
    flex: 2,
    backgroundColor: '#fff',
    borderRadius: 10,
    lineHeight: 20,
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10
  }
});

 
