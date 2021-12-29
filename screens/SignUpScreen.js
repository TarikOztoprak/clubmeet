import Logo from '../components/Logo'
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput,TouchableOpacity, ImageBackground } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase.js'



function SignUpScreen({ navigation }) {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [signup, setSignup] = useState('')
  
    return (
      <ImageBackground source={require('../images/login.jpg')} style={styles.container}>
        <View style= {styles.flex1}>
          <Logo/>
        </View>
        <Text style= {styles.txt}>{signup}</Text>
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
           style= {styles.input}
          />
          <TouchableOpacity style = {styles.btn}
            onPress={() =>  {
              if(pass.length > 8)
              {
                  createUserWithEmailAndPassword(auth, email, pass)
                  .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // setDatabase();
                    setSignup('SignUp Succesfull')
                    
                    navigation.navigate('Login')
                  
                    // ...
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setSignup(errorCode)
                    // ..
                  });
              }
              else{
                  setSignup('Password is so short.')
              }
            }
          }
          ><Text style= {styles.txt}>SIGNUP</Text></TouchableOpacity>
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
      color: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      lineHeight: 25,
      borderRadius: 10,
      padding: 10,
      marginTop:10
    },
    input: {
      backgroundColor: '#fff',
      fontSize: 30,
      borderRadius: 10,
      lineHeight:30,
      paddingRight: 5,
      marginTop:10,
      paddingLeft: 10
    },
    txt: {
      fontSize: 30,
      color: '#ffffff'
    }
  });

export default SignUpScreen