import Logo from '../components/Logo'
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput,TouchableOpacity } from 'react-native';


import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase.js'


function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [login, setLogin] = useState('')
  
    const handleLogin = () => {
      signInWithEmailAndPassword(auth, email, pass)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setLogin('Login Succesfull')
            setTimeout(() => {
              navigation.navigate('Clubs')
            }, 1500);
            
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setLogin(errorCode)
          });
    }

    return (
      <View style={styles.container}>
        <View style= {styles.flex1}>
          <Logo/>
        </View>
        
        <Text style= {styles.txt}>{login}</Text>
        <View style= {styles.flex2}>
          <TextInput
              style= {styles.input }
              onChange= {(e) => setEmail(e.target.value)}
          />
          <TextInput
              secureTextEntry={true}
              style= {styles.input }
              onChange= {(e) => setPass(e.target.value)}
          />

          <TouchableOpacity style = {styles.btn}
            onPress={() => handleLogin()}
            ><Text style= {styles.txt}>LOGIN</Text></TouchableOpacity>

            <TouchableOpacity 
            style = {styles.btnSign}
            onPress={() => navigation.navigate('Sign Up')}>
            <Text style= {styles.txtSign}>SignUp</Text>
            </TouchableOpacity>
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
    },
    btn: {
      backgroundColor: '#EF3939',
      color: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      lineHeight: 30,
      borderRadius: 100,
      padding: 20,
      marginTop:10
    },
    btnSign: {
      backgroundColor: '#9BCCBA',
      color: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      lineHeight: 20,
      borderRadius: 100,
      padding: 10,
      marginTop:10
    },
    input: {
      backgroundColor: '#fff',
      borderRadius: 100,
      lineHeight:30,
      marginTop:10,
      paddingLeft: 10,
      fontSize: 30,
      width: 300,
      maxWidth: 300
     
    },
    txt: {
      fontSize: 30,
      color: '#ffffff'
    },
    txtSign: {
      fontSize: 20,
      color: '#ffffff'
    }
  });

export default LoginScreen