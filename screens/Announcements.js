import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, FlatList } from 'react-native';
import BottomBar from '../components/BottomBar';
import ChatItem from '../components/ChatItem';
import { auth } from '../firebase';
import { doc, onSnapshot, getFirestore, updateDoc, arrayUnion } from "firebase/firestore";
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';

const db = getFirestore();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function Announcements({route, navigation}) {
    const { name, code } = route.params;
    const [message, setMessage] = useState([])
    const [sendMessage, setSendMessage] = useState("")
    const [admin, setAdmin] = useState("")
   
    //notification
    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();

    useEffect(() => {
      const unsub = onSnapshot(doc(db, "clubs", code), { includeMetadataChanges: true },  (doc) => {
        if(doc.data().announcements != undefined)
        {
            setMessage(doc.data().announcements.reverse());
        }
        setAdmin(doc.data().user[0])
      });

    }, []);

    useEffect(() => {
      registerForPushNotificationsAsync(code).then(token => setExpoPushToken(token));
  
      // This listener is fired whenever a notification is received while the app is foregrounded
      notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
        setNotification(notification);
      });
  
      // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
      responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
        console.log(response);
      });
  
      return () => {
        Notifications.removeNotificationSubscription(notificationListener.current);
        Notifications.removeNotificationSubscription(responseListener.current);
      };
    }, []);

    async function createMessage(params) {
      try {
        const ref = doc(db, "clubs", code);
        var today = new Date()
        await updateDoc(ref, {
          announcements: arrayUnion(auth.currentUser?.email + " " + (today.getDate()<10?'0':'')+ today.getDate() + "." + (today.getMonth()<10?'0':'') + today.getMonth() + "." +Number(today.getYear() - 100)+ "/" + (today.getHours()<10?'0':'')+ today.getHours() + ":" + (today.getMinutes()<10?'0':'')+ today.getMinutes() + " " + params
          )
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }

    return (
      <View style={styles.homescreen}>
      
        <View style={styles.banner}><Text style={styles.txt}>{name} Announcements</Text></View>
        <View  style={styles.chat}>
          <FlatList
              inverted
              data={message}
              keyExtractor={({ item }, index) => index}
              renderItem={({ item }, index) => 
                  (<ChatItem message = {item} code= {code}/>)
              }
          />
        </View>
        
        <View style= {[auth.currentUser?.email == admin ?  styles.input: styles.hide]}>
          <TextInput
            onChangeText={text => setSendMessage(text)}
            style={styles.btn}
            placeholder='Message'
            value={sendMessage}
          />
        
          <TouchableOpacity style={styles.send}
            onPress={async() => {
                createMessage(sendMessage)
                await sendPushNotification(expoPushToken, name, sendMessage, code)
                setSendMessage("")
              }
            }
          >
            <Text style={styles.txt}>↑</Text>
          </TouchableOpacity>
        </View>
      
        <BottomBar name={name} code={code} styles={styles.input} navigation = {navigation}/>
      </View>
    );
}

async function sendPushNotification(expoPushToken, name, sendMessage, code) {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: name,
    body: sendMessage,
    channelId: code,
    data: { someData: 'goes here' },
  };

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
}

async function registerForPushNotificationsAsync(code) {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync(code, {
      name: code,
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}

const styles = StyleSheet.create({
  homescreen: {
    flex: 1,
    backgroundColor: '#F8E8E8'
  },
  btn:{
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderColor: '#ffffff',
    borderWidth: 1,
    padding: 10,
    width:'90%'
  },
  banner: {
    flex: 1,
    backgroundColor: '#EF3939',
    width: '100%',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 30,
    paddingTop: 30
  },
  input: {
    flexDirection: 'row'
  },
  txt: {
    flex: 1,
    fontSize: 22,
    color: '#ffffff'
  },
  chat: {
    flex:10
  },
  send:{
    backgroundColor: '#9BCCBA',
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 10,
    width: '10%'
  },
  hide:{
      display: 'none'
  }
});
