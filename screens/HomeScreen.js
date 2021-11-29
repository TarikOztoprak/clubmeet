import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
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

export default function HomeScreen() {
    return (
      <View style={styles.homescreen}>
        <View style={styles.banner}><Text>Club Name</Text></View>
        <TextInput
          style={styles.btn}
        />
      </View>
     
    );
}

 
