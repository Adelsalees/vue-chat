import firebase from "firebase/app";
import "firebase/database";
const config={
    apiKey: "AIzaSyDeRwOWEUuzsgvsFf6ctP16PTqgarAQRgM",
    authDomain: "vue-chat-ba7c2.firebaseapp.com",
    projectId: "vue-chat-ba7c2",
    storageBucket: "vue-chat-ba7c2.appspot.com",
    messagingSenderId: "382230458142",
    appId: "1:382230458142:web:bbd018f46029376218230f"
}
const db=firebase.initializeApp(config);
export default db;