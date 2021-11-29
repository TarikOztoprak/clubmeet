import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Channel({children}) {
  return (
   
    <TouchableOpacity style={styles.container}>
        {children}
    </TouchableOpacity>
   
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
    fontSize: 26,
    marginBottom: 5
  }
  
});
