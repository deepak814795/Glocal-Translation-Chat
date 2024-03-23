import{getApp, getApps, initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getFunctions }  from "firebase/functions"


const firebaseConfig = {
  apiKey: "AIzaSyBQ0pFknRwVttk2CuHV77NR_9ZADLpMggQ",
  authDomain: "saas-app-67187.firebaseapp.com",
  projectId: "saas-app-67187",
  storageBucket: "saas-app-67187.appspot.com",
  messagingSenderId: "449298595946",
  appId: "1:449298595946:web:1c306e54412d447a260a13"
  };

const app=getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);
const functions=getFunctions(app);

export {db, auth, functions};  

  