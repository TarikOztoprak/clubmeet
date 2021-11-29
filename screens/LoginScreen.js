import Logo from '../components/Logo'
import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

function LoginScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <View style= {styles.flex1}>
          <Logo/>
        </View>
        
        <View style= {styles.flex2}>
          <Button 
  
            title="Authentication"
            onPress={() =>  navigation.setIsLogin(true)}
           
          />
        </View>
      </View>
     
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 30,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#9BCCBA'
    },
    flex1: {
      flex: 1
    },
    flex2: {
      flex: 2
    }
  });

export default LoginScreen