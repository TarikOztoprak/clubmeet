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
    marginBottom: 50,
    bottom: 0
  },
  clubmeet:{
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 30,
    lineHeight: 30,
    color: '#FFFFFF'
  }
});
