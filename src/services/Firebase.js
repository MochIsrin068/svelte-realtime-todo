import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: __myapp.env.FIREBASE_API_KEY,
    authDomain: __myapp.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: __myapp.env.FIREBASE_DATABASE_URL,
    projectId: __myapp.env.FIREBASE_PROJECT_ID,
    storageBucket: __myapp.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: __myapp.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: __myapp.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();