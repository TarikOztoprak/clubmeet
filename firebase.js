// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQ3V4FbjEAxOD1_JXl1Zl9o6xZ97vV4ag",
    authDomain: "clubmeet-8dbdd.firebaseapp.com",
    databaseURL: "https://clubmeet-8dbdd-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "clubmeet-8dbdd",
    storageBucket: "clubmeet-8dbdd.appspot.com",
    messagingSenderId: "101108413205",
    appId: "1:101108413205:web:a8a12893c488916b98af1c",
    measurementId: "G-1X821L19QE"
};


let app = initializeApp(firebaseConfig);


const auth = getAuth()

export { auth };