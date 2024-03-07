import{getApp, getApps, initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getFunctions } from "firebase/functions"

const firebaseConfig = {
    apiKey: "AIzaSyCJ7UZRjI-3q7vESt9UaPDF08DpYq-XKVo",
    authDomain: "saas-chat-app-dc1dc.firebaseapp.com",
    projectId: "saas-chat-app-dc1dc",
    storageBucket: "saas-chat-app-dc1dc.appspot.com",
    messagingSenderId: "785038743864",
    appId: "1:785038743864:web:5ba952d842c507160309cd"
  };

const app=getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);
const functions=getFunctions(app);

export {db, auth, functions};  

  