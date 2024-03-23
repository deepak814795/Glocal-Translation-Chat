import{getApp, getApps, initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getFunctions }  from "firebase/functions"


const firebaseConfig = {
  apiKey: "AIzaSyCJ7UZRjI-3q7vESt9UaPDF08DpYq-XKVo",
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID_FOR_FIREBASETS,
  storageBucket:  process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId:  process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

const app=getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);
const functions=getFunctions(app);

export {db, auth, functions};  

  