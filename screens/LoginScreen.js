import Logo from '../components/Logo'
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity, ImageBackground} from 'react-native';


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
           
            navigation.replace('Content')

            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setLogin(errorCode)
          });
    }

    return (
      <ImageBackground source={require('../images/login.jpg')} style={styles.container}>
        <View style= {styles.flex1}>
          <Logo/>
        </View>
        
        <Text style= {styles.txt}>{login}</Text>
        <View style= {styles.flex2}>
          <TextInput
              style= {styles.input }
              placeholder="Email"
              value={email}
              onChangeText={text => setEmail(text)}
          />
          <TextInput
              secureTextEntry={true}
              value={pass}
              placeholder="Password"
              onChangeText={text => setPass(text)}
              style= {styles.input }
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
      </ImageBackground>     
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
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    flex2: {
      flex: 2,
      width: '80%'
    },
    btn: {
      backgroundColor: '#EF3939',
      color: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      lineHeight: 25,
      borderRadius: 10,
      padding: 10,
      marginTop:10
    },
    btnSign: {
      backgroundColor: '#fff0',
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
      borderRadius: 10,
      lineHeight:30,
      marginTop:10,
      paddingLeft: 10,
      paddingRight: 5,
      fontSize: 30,
     
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