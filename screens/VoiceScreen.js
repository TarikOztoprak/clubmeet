import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, ImageBackground} from 'react-native';
import BottomBar from '../components/BottomBar';
import { auth } from '../firebase';
import { doc, onSnapshot, getFirestore, updateDoc, arrayUnion } from "firebase/firestore";
import * as Clipboard from 'expo-clipboard';

const db = getFirestore();

export default function VoiceScreen({route, navigation}) {
    const { name, code } = route.params;
    const [users, setUsers] = useState([]);
    const [admin, setAdmin] = useState([]);
    useEffect(() => {
      const unsub = onSnapshot(doc(db, "clubs", code), { includeMetadataChanges: true },  (doc) => {
        setUsers(doc.data().user);
        setAdmin(doc.data().user[0])
      });
    }, []);

    const copyToClipboard = () => {
      Clipboard.setString(code);
    };

    const fetchCopiedText = async () => {
      const text = await Clipboard.getString();
      setCopiedText(text);
    };
    
    return (
      
      <ImageBackground source={require('../images/clubs.jpg')} style={styles.container}>
        <View style={[styles.flex1, {justifyContent: 'flex-end'}]}>
          <TouchableOpacity onPress={() => navigation.navigate('Announcements', {name:name, code:code})} style={styles.banner}>
            <Text style={styles.txt}>📢Announcements📢</Text>
          </TouchableOpacity>
          
        </View>

        <View style={styles.flex5}>
          <Text style={styles.txt}>{name} Members</Text>
          <FlatList style = {{backgroundColor: '#ddffff', width: '100%', borderRadius: 5}}
             data={users}
             keyExtractor={({ item }, index) => index}
             renderItem={({ item }, index) => 
              (
              <View style={{borderBottomWidth: 2, borderColor: 'red', flexDirection: 'row', justifyContent:'space-between', alignItems: 'center', padding: 7}}>
                <Text style = {[item == auth.currentUser?.email ? styles.green : styles.black]}>{item}</Text>
                {auth.currentUser?.email == admin && item != admin ? (
                <TouchableOpacity style={styles.deleteUser}>
                  <Text style={{color: 'red'}}>❌</Text>
                </TouchableOpacity>
                ) : <Text></Text>}
              </View>
              )
          }/>
        </View>

        <View style={styles.flex1}>
          <TouchableOpacity style={styles.banner} onPress={copyToClipboard}>
            <Text style={styles.txt}>Click to Copy Club Code 📋</Text>
          </TouchableOpacity>
        </View>
       
        <BottomBar name={name} code={code} styles={styles.input} navigation = {navigation}/>
      </ImageBackground>
     
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#9BCCBA',
    alignItems: 'center',
    width: '100%'
  },
  banner: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10
  },
  txt:{
    fontSize: 25,
    color: 'red'
  },
  flex1:{
    flex: 1,
    justifyContent: 'center'
  },
  flex1row:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '90%'
  },
  flex5:{
    flex: 5,
    width: '90%'
  },
  tinyLogo:{
    width: 35,
    height: 35,
    resizeMode: 'stretch'
  },
  mic:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    marginLeft: 10,
    borderRadius: 30,
    borderColor: 'gray',
    borderWidth: 2
  },
  open:{
    backgroundColor: 'green',
  },
  close:{
    backgroundColor: 'red',
  },
  green:{
    color: 'green'
  },
  deleteUser:{
    backgroundColor: '#9BCCBA',
    width: 30,
    height:30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  }

});

 
