// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// const a = import.meta
// console.log(a);
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAG3rzW9GDV1_wAeVksUoJ0P-ddO1a2uzE",
//   authDomain: "passwallet2.firebaseapp.com",
//   projectId: "passwallet2",
//   storageBucket: "passwallet2.firebasestorage.app",
//   messagingSenderId: "64508169890",
//   appId: "1:64508169890:web:f724a746bc150b2b0a11fb",
//   measurementId: "G-6N094ZCY2Y"
// };

// Initialize Firebase
// export const appFirebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

import CryptoJS from "crypto-js";
import { FirebaseApp } from "firebase/app";
import { doc, DocumentData, DocumentSnapshot, getDoc, getFirestore, setDoc } from "firebase/firestore";

export const createSalt = (length:number=8) => {
  const salt = CryptoJS.lib.WordArray.random(length).toString();
  return salt;
}

export const saveSalt = async (FbApp:FirebaseApp, data:createAccount, s?:string):Promise<{salt:string}> => {
  return new Promise(async (resolve, reject) => {
    const salt = s ? s : createSalt();
    const db = getFirestore(FbApp)
    setDoc(doc(db, data.email, "salt"), {
      salt: salt,
    }).then(() => {
      resolve({salt: salt});
    }).catch((err) => {
      reject({error: err});
    });
  });
}

const get = (FbApp:FirebaseApp, email:string, collection:string) => {
  const db = getFirestore(FbApp)
  const docRef = doc(db, email, collection);
  return getDoc(docRef).then((doc) => { 
    return doc.exists() ? doc.data() : null
  }
  ).catch(() => null);
}

export const getSalt = async (FbApp:FirebaseApp, email:string)=> {
  return get(FbApp, email, "salt");
}

export const getDataDB = (FbApp:FirebaseApp, email:string)=> {
  return get(FbApp, email, "data");
}

export const generateID = () => {
   // console.log(crypto.getRandomValues(new Uint32Array(1))[0]);
  return crypto.randomUUID()
}