import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Channel from '../components/Channel';
import BottomBar from '../components/BottomBar'
import { auth } from '../firebase';
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { doc, getDoc } from "firebase/firestore";

function createCode() {
  let code = '';
  for (let i = 0; i < 9; i++) {
    let x = Math.round(Math.random() * 10)
    code += x
  }
  return code
}
const db = getFirestore();
async function CreateClub(params) {
  try {
    const docRef = await addDoc(collection(db, "clubs"), {
      name: params,
      code: createCode()
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}


export default function ClubsScreen({navigation}) {
    const [cClub, setcClub] = useState('');
    return (
      <View style={styles.homescreen}>
        <View style={styles.banner}><Text style={styles.txt}>Clubs</Text></View>
    
        <Text>{auth.currentUser?.email}</Text>
        <Text>{auth.currentUser?.uid}</Text>

        <View style= {styles.row}>
          <TextInput style= {styles.input}
              placeholder="Club Name"
              onChangeText={text => setcClub(text)}
          />
          <TouchableOpacity style={styles.create} onPress={()=> CreateClub(cClub)}>
            <Text style={styles.txt}>Create</Text>
          </TouchableOpacity>
        </View>
        
        <View style= {styles.row}>
          <TextInput style= {styles.input}
              placeholder="Club Code"
          />
          <TouchableOpacity style={styles.create} onPress={()=> console.log('gelişcek')}><Text style={styles.txt}>Join</Text></TouchableOpacity>
        </View>
        
        <Channel><Text style={styles.txt}>Kitap Kulubü</Text></Channel>

        <BottomBar navigation = {navigation}/>
      </View>
     
    );
}

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
    width: '100%',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 30,
    fontSize: 30
  },
  create:{
    flex: 1,
    backgroundColor: '#EF3939',
    color: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    fontSize: 30,
  },
  txt: {
    fontSize: 30,
    color: '#ffffff'
  },
  row:{
    flexDirection: 'row',
    marginBottom: 20,
    width: '90%'
  },
  input:{
    flex: 2,
    backgroundColor: '#fff',
    borderRadius: 10,
    lineHeight: 20,
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10
  },
});

 
