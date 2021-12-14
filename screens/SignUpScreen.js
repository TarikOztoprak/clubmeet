import Logo from '../components/Logo'
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput,TouchableOpacity } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// Import the functions you need from the SDKs you need
import {auth} from '../firebase.js'
// import { getFirestore } from "firebase/firestore"
// import { collection,query, setDoc, addDoc, getDocs, doc, arrayUnion, updateDoc} from "firebase/firestore"; 
// const db = getFirestore();

// async function setDatabase() {
//     try {
//       await setDoc(doc(db, "users", auth.currentUser?.email), {
//         name: auth.currentUser?.email,
//         clubs: []
//       });
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
//   }


function SignUpScreen({ navigation }) {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [signup, setSignup] = useState('')
  
    return (
      <View style={styles.container}>
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
      paddingLeft: 10,
      width: 300
    },
    txt: {
      fontSize: 30,
      color: '#ffffff'
    }
  });

export default SignUpScreen