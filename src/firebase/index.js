import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDzar6HF7jvJcPtxIEItP_CosfPPTTeGO4",
    authDomain: "to-do-fe869.firebaseapp.com",
    projectId: "to-do-fe869",
    storageBucket: "to-do-fe869.appspot.com",
    messagingSenderId: "78966255974",
    appId: "1:78966255974:web:4c9665ad1ef4d4f32bd8a7",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
