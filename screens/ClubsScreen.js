import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Channel from '../components/Channel';

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
    marginTop: 25,
    marginBottom: 25

  }
});



export default function ClubsScreen() {
    return (
      <View style={styles.homescreen}>
        <View style={styles.banner}><Text>Clubs</Text></View>
        <TouchableOpacity style={styles.create}><Text>+ Create Club</Text></TouchableOpacity>
        <Channel><Text>Kitap Kulubü</Text></Channel>
        <Channel><Text>Satranç Kulubü</Text></Channel>
      </View>
     
    );
}

 
