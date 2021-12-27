import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, ActivityIndicator, ImageBackground} from 'react-native';
import Channel from '../components/Channel';
import { auth } from '../firebase';
import { getFirestore } from "firebase/firestore"
import { collection,query, setDoc, getDocs, doc, arrayUnion, updateDoc} from "firebase/firestore"; 

function createCode() {
  let code = '';
  for (let i = 0; i < 9; i++) {
    let x = Math.round(Math.random() * 9)
    code += x
  }
  return code
}
const db = getFirestore();

async function CreateClub(params) {
  try {
    let kod = createCode()
    await setDoc(doc(db, "clubs", kod), {
      name: params,
      code: kod,
      user: [auth.currentUser?.email],
      messages: []
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function joinClub(params) {
  try {
    const ref = doc(db, "clubs", params);
    await updateDoc(ref, {
      user: arrayUnion(auth.currentUser?.email)
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}



export default function ClubsScreen({navigation}) {
    const [cClub, setcClub] = useState('');
    const [jClub, setjClub] = useState('');
    const [createText, setCreateText] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

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
          doc.data().user.forEach((i) =>{
            console.log(i)
            if(i == auth.currentUser?.email)
              s = [...s,doc.data()];
          })
      });
      setData(s)
      setLoading(false)
    }

    const handleSingOut = () => {
      auth.signOut()
          .then(() => {
              navigation.replace("Login")
          })
          .catch(error => alert(error.message))
    }

    return (
      <ImageBackground source={require('../images/clubs.jpg')} style={styles.homescreen}>
        <View style={styles.banner}><Text style={styles.txt}>Clubs</Text></View>
        
        <View style={styles.flex2}>

          <Text>{createText}</Text>
          
          <View style= {styles.row}>
            <TextInput id='createInput' style= {styles.input}
                placeholder="Club Name"
                value= {cClub}
                onChangeText={text => setcClub(text)}
            />
           
            <TouchableOpacity style={styles.create} 
              onPress={()=>{
                if(cClub.length > 2)
                {
                  CreateClub(cClub)
                  setCreateText('The Club was Created.')
                  setcClub("")
                }
                else{
                  setCreateText('Club name is so short.')
                }
                
                getData()
              }
              }>
              <Text style={styles.txt}>Create</Text>
            </TouchableOpacity>
          </View>
          
          <View style= {styles.row}>
            <TextInput style= {styles.input}
                placeholder="Club Code"
                value= {jClub}
                onChangeText={text => {
                  setjClub(text)
                  }                
                }
            />
            <TouchableOpacity style={styles.create}
            onPress={()=> {
              joinClub(jClub)
              setCreateText('Joined the Club.')
              getData()}
            }
            ><Text style={styles.txt}>Join</Text></TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.flex6}>
        {loading ? (
          <ActivityIndicator
            visible={loading}
            textContent={'Loading...'}
            size="large" 
            color="#ff0000"
          />
        ) : (
        <FlatList
            style = {styles.fltlist}
            data={data}
            keyExtractor={({ item }, index) => index}
            renderItem={({ item }, index) => (
                <Channel key={index} onPress={() => navigation.navigate('Home')}
                  clubname={item.name}  clubcode = {item.code} navigation={navigation}
                />
            )}
        />
        )}
        </View>
        
        <Text>{auth.currentUser?.email}</Text>
        <TouchableOpacity onPress={handleSingOut}>
              <Text style={styles.txtred}>SIGN OUT</Text>  
        </TouchableOpacity>
      
      </ImageBackground>
     
    );
}

const styles = StyleSheet.create({
  homescreen: {
    flex: 1,
    backgroundColor: '#9BCCBA',
    alignItems: 'center'
  },
  banner: {
    backgroundColor: '#EF3939',
    width: '100%',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 30,
    fontSize: 30,
    paddingTop: 30,
    paddingBottom: 10
  },
  create:{
    flex: 1,
    backgroundColor: '#EF3939',
    color: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    fontSize: 30, 
    // background color must be set
  },
  txt: {
    fontSize: 30,
    color: '#ffffff',
    
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
    borderRadius: 10,
  },
  flex2:{
    flex:2,
    alignItems: 'center',
    width: '100%'
  },
  flex6:{
    flex: 6,
    width: '100%',
  },
  deleteClub:{
    backgroundColor: '#9BCCBA',
    width: 30,
    height:30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    position: 'absolute',
    right: 0,
    top: 0
  },
  txtred:{
    fontSize: 30,
    color: '#ff0000',
  }
});