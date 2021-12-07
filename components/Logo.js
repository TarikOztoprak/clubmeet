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
    width: 165,
    height: 160,
    backgroundColor: '#EF3939',
    borderRadius: 200,
  },
  clubmeet:{
    fontFamily: 'Salsa',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 30,
    lineHeight: 30,
    color: '#FFFFFF'
  }
});
