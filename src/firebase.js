import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAt-AR9Lr9l8sbMrpeEutBcP6LyI66OFgU",
    authDomain: "instagram-clone-21.firebaseapp.com",
    projectId: "instagram-clone-21",
    storageBucket: "instagram-clone-21.appspot.com",
    messagingSenderId: "1016745716865",
    appId: "1:1016745716865:web:b43fbd14aee01f6ffef180",
  
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
