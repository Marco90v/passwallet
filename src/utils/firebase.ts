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

import { FirebaseApp } from "firebase/app";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { createSalt, encript } from "./functions";

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

const get = async (FbApp:FirebaseApp, email:string, collection:string) => {
  const db = getFirestore(FbApp)
  const docRef = doc(db, email, collection);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() : null;
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

export const saveData = (FbApp:FirebaseApp, item: ItemType[], email:string, pass: string, salt: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    try {
      const rest = encript(JSON.stringify(item), pass, salt);
      // resolve(rest); // Resuelve la promesa con el resultado
      const db = getFirestore(FbApp)
      setDoc(doc(db, email, "data"), {
        data: rest,
      }).then(() => {
        resolve(true);
      }).catch((err) => {
        reject(false);
      });

    } catch (error) {
      reject(false); // Rechaza la promesa si ocurre un error
    }
  });
};