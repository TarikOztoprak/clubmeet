import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList} from 'react-native';
import Channel from '../components/Channel';
import BottomBar from '../components/BottomBar'
import { auth } from '../firebase';
import { getFirestore } from "firebase/firestore"
import { collection,query, where, addDoc, getDocs, doc} from "firebase/firestore"; 

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
    const [createText, setCreateText] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        getData()
        console.log(data)
    }, []);

    async function getData(){
      // , where("name", "==", "kitap")
      let s = []
      const q = query(collection(db, "clubs"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
          s = [...s,doc.data()];
      });
      setData(s)
    }

    return (
      <View style={styles.homescreen}>
        <View style={styles.flex3}>
          <View style={styles.banner}><Text style={styles.txt}>Clubs</Text></View>
      
          {/* <Text>{auth.currentUser?.email}</Text>
          <Text>{auth.currentUser?.uid}</Text> */}

          <Text>{createText}</Text>
          <View style= {styles.row}>
            <TextInput id='createInput' style= {styles.input}
                placeholder="Club Name"
                value= {cClub}
                onChangeText={text => setcClub(text)}
            />
            <TouchableOpacity style={styles.create} 
              onPress={()=>{
                CreateClub(cClub)
                setCreateText('Kulüp Oluşturuldu')
                setcClub("")
              }
              }>
              <Text style={styles.txt}>Create</Text>
            </TouchableOpacity>
          </View>
          
          <View style= {styles.row}>
            <TextInput style= {styles.input}
                placeholder="Club Code"
            />
            <TouchableOpacity style={styles.create} onPress={()=> getData()}><Text style={styles.txt}>Join</Text></TouchableOpacity>
          </View>

        </View>
        
        <View style={styles.flex6}>
        <FlatList
            style = {styles.fltlist}
            data={data}
            keyExtractor={({ item }, index) => index}
            renderItem={({ item }, index) => (
              <Channel key={index} onPress={() => navigation.navigate('Home')}>
                <TouchableOpacity>
                 <Text style={styles.txt}>
                  {item.name}
                 </Text>
                </TouchableOpacity>
              </Channel>
            )}
        />
        </View>
        <View style={styles.flex1}>
          <BottomBar navigation = {navigation}/>
        </View>
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
    backgroundColor: '#EF3939',
    width: '100%',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 30,
    fontSize: 30,

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
  fltlist:{
    width: '90%',
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  flex1:{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    width: '100%'
  },
  flex3:{
    flex:3,
    justifyContent:'center',
    alignItems: 'center',
    width: '100%'
  },
  flex6:{
    flex: 6,
    width: '100%'
  }
});