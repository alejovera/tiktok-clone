// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDGOU93pxmsrOwAxQ_5XU0Xp7pGHcjfcqg",
    authDomain: "tiktok-clone-f8f56.firebaseapp.com",
    databaseURL: "https://tiktok-clone-f8f56.firebaseio.com",
    projectId: "tiktok-clone-f8f56",
    storageBucket: "tiktok-clone-f8f56.appspot.com",
    messagingSenderId: "229423591869",
    appId: "1:229423591869:web:bc6d746689db5ba2b8e2d4",
    measurementId: "G-6V4DY0H3E9"
};

const firebaseApp = 
firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()

export default db;