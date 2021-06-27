// Your web app's Firebase configuration
import firebase from "firebase";



var firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyB_THZA7eKEGdQLiRcA4gkeI0gC_ug4bC4",
        authDomain: "react-ozon.firebaseapp.com",
        projectId: "react-ozon",
        storageBucket: "react-ozon.appspot.com",
        messagingSenderId: "366356281542",
        appId: "1:366356281542:web:78f8e6d7add0d6eccd7fc7",
    }
);

var db = firebaseApp.firestore();
 const database= firebase.database()
export {db,database};