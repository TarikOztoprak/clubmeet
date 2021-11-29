import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Logo() {
  return (
   
    <View style={styles.container}>
      <Text style={styles.clubmeet}>Club Meet</Text>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 135,
    height: 128,
    backgroundColor: '#EF3939',
    borderRadius: '200px',
  },
  clubmeet:{
    fontFamily: 'Salsa',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 23,
    lineHeight: 28,
    color: '#FFFFFF'
  }
});
