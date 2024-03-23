import{getApp, getApps, initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getFunctions }  from "firebase/functions"


const firebaseConfig = {
  apiKey: "AIzaSyCJ7UZRjI-3q7vESt9UaPDF08DpYq-XKVo",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID_FOR_FIREBASETS,
  storageBucket: "saas-chat-app-dc1dc.appspot.com",
  messagingSenderId: "785038743864",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

const app=getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);
const functions=getFunctions(app);

export {db, auth, functions};  

  