import Logo from '../components/Logo'
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput,TouchableOpacity } from 'react-native';


import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [login, setLogin] = useState('')
    const auth = getAuth();
    return (
      <View style={styles.container}>
        <View style= {styles.flex1}>
          <Logo/>
        </View>
        <Text>{login}</Text>
        <TextInput 
            onChange= {(e) => setEmail(e.target.value)}
          />
          <TextInput 
            onChange= {(e) => setPass(e.target.value)}
          />
          <TouchableOpacity style = {styles.btn}
            onPress={() =>  {signInWithEmailAndPassword(auth, email, pass)
              .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setLogin(email)
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
              });}}
           
          ><Text>Authentication</Text></TouchableOpacity>
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
      padding: 20
    }
  });

export default LoginScreen