import React, { Children } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ViewBase } from 'react-native';

export default function ChatItem(props) {
  let chat = props.message.split(" ");
  const user = chat[0];
  const time = chat[1];
  chat.shift()
  chat.shift()
  const message = chat
  return (
    <View style={styles.container}>
        <View style={styles.row}>
            <Text style={styles.name}>
                    {user}
            </Text>
            <Text style={styles.name}>
                    {time}
            </Text>
        </View>
        <Text style={styles.txt}>
                    {message}
        </Text>
   
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 4,
    marginTop: 4,
    paddingLeft: 10,
    paddingRight: 10
  },
  txt:{
    color: 'black',
    fontSize: 16,
  },
  name:{
    color: '#9BCCBA',
    fontSize: 10
  },
  row:{
      flexDirection: 'row',
      justifyContent: 'space-between'
  }
  
});
