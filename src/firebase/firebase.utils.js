import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAX5MNxfxu_3Hydxs8xPveaBrm0xlLZBQA",
    authDomain: "crwn-db-78843.firebaseapp.com",
    projectId: "crwn-db-78843",
    storageBucket: "crwn-db-78843.appspot.com",
    messagingSenderId: "135412897015",
    appId: "1:135412897015:web:81e01c39a98fbd0bbeeff2",
    measurementId: "G-3X5KCC5RTC"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
