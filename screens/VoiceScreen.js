import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';


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
    width: '70%',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 30,
    borderRadius: 100,
    marginTop: 30
  }
});

export default function VoiceScreen() {
    return (
      <View style={styles.homescreen}>
        <TouchableOpacity style={styles.banner}><Text>Announcements</Text></TouchableOpacity>
        <Text>Members</Text>
        <Text>Voice Chat</Text>
        <TouchableOpacity style={styles.banner}><Text>Join</Text></TouchableOpacity>
      </View>
     
    );
}

 
