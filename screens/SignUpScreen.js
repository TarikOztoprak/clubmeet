import Logo from '../components/Logo'
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput,TouchableOpacity } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// Import the functions you need from the SDKs you need


function SignUpScreen({ navigation }) {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [signup, setSignup] = useState('')
    const auth = getAuth();
    return (
      <View style={styles.container}>
        <View style= {styles.flex1}>
          <Logo/>
        </View>
        <Text style= {styles.txt}>{signup}</Text>
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
            onPress={() =>  {
              createUserWithEmailAndPassword(auth, email, pass)
              .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setSignup('SignUp Succesfull')
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setSignup(errorMessage)
                // ..
              });
            }}
           
          ><Text style= {styles.txt}>SIGNUP</Text></TouchableOpacity>
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
      color: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      lineHeight: 30,
      borderRadius: 100,
      padding: 20,
      marginTop:10
    },
    input: {
      backgroundColor: '#fff',
      fontSize: 30,
      borderRadius: 100,
      lineHeight:30,
      marginTop:10,
      paddingLeft: 10,
      width: 300
    },
    txt: {
      fontSize: 30,
      color: '#ffffff'
    }
  });

export default SignUpScreen