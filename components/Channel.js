import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Channel(props) {
  return (
   
    <TouchableOpacity style={styles.container}>
        {props.children}
    </TouchableOpacity>
   
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '80%',
    borderRadius: 10,
    backgroundColor: '#ff0000',
    fontSize: 26,
    marginBottom: 5
  }
  
});
