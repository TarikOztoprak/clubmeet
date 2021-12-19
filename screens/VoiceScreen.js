import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList} from 'react-native';
import BottomBar from '../components/BottomBar';
import { auth } from '../firebase';
import { doc, onSnapshot, getFirestore, updateDoc, arrayUnion } from "firebase/firestore";

const db = getFirestore();


export default function VoiceScreen({route, navigation}) {
    const { name, code } = route.params;
    const [users, setUsers] = useState([]);
    useEffect(() => {
      const unsub = onSnapshot(doc(db, "clubs", code), { includeMetadataChanges: true },  (doc) => {
        setUsers(doc.data().user);
      });
    }, []);
    return (
      
      <View style={styles.container}>
        <View style={styles.flex1}>
          <TouchableOpacity onPress={() => navigation.navigate('Announcements', {name:name, code:code})} style={styles.banner}>
            <Text style={styles.txt}>Announcements</Text>
          </TouchableOpacity>
          
        </View>

        <View style={styles.flex3}>
          <Text style={styles.txt}>{name} Members</Text>
          <FlatList style = {{backgroundColor: 'white', width: '100%'}}
             data={users}
             keyExtractor={({ item }, index) => index}
             renderItem={({ item }, index) => 
              (<View style={{borderBottomWidth: 2, borderColor: 'red'}}><Text>{item}</Text></View>)
          }/>
        </View>

        <View style={styles.flex3}>
          <Text style={styles.txt}>{name} Voice Chat</Text>
          <FlatList style = {{backgroundColor: 'white'}}/>
        </View>
        <View style={styles.flex1row}>
          <View style={styles.flex3}>
            <TouchableOpacity style={styles.banner}><Text style={styles.txt}>Join</Text></TouchableOpacity>
          </View>

          <View style={styles.flex1}>
            <TouchableOpacity style={[styles.mic, styles.open]}>
              <Image style={styles.tinyLogo} source={{uri: 'https://www.iconpacks.net/icons/1/free-microphone-icon-342-thumb.png'}}/>
            </TouchableOpacity>
          </View>

          <View style={styles.flex1}>
            <TouchableOpacity style={[styles.mic, styles.close]}>
              <Image style={styles.tinyLogo} source={{uri: 'https://www.freeiconspng.com/uploads/sound-off-music-mute-off-sound-speaker-volume-icon-16.png'}}/>
            </TouchableOpacity>
          </View>
        </View>
        <BottomBar name={name} code={code} styles={styles.input} navigation = {navigation}/>
      </View>
     
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#9BCCBA',
    alignItems: 'center',
    width: '100%'
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
    backgroundColor: '#EF3939',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10
  },
  txt:{
    fontSize: 25,
    color: 'white'
  },
  flex1:{
    flex: 1,
    justifyContent: 'flex-end'
  },
  flex1row:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '90%'
  },
  flex3:{
    flex: 3,
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
  }

});

 
