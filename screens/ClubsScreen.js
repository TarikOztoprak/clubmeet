import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Channel from '../components/Channel';
import BottomBar from '../components/BottomBar'
export default function ClubsScreen({navigation}) {
    return (
      <View style={styles.homescreen}>
        <View style={styles.banner}><Text style={styles.txt}>Clubs</Text></View>
        <TouchableOpacity style={styles.create}><Text style={styles.txt}>+ Create Club</Text></TouchableOpacity>
        <TouchableOpacity style={styles.create}><Text style={styles.txt}>+ Join Club</Text></TouchableOpacity>
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
    backgroundColor: '#EF3939',
    color: '#fff',
    borderRadius: 100,
    width: '90%',
    alignItems: 'center',
    fontSize: 30,
    marginTop: 12,
    marginBottom: 12
 
  },
  txt: {
    fontSize: 30,
    color: '#ffffff'
  }
});

 
