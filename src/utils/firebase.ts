import { FirebaseApp } from "firebase/app";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { createSalt, encript } from "./functions";

export const saveSalt = async (FbApp:FirebaseApp, data:createAccount, s?:string):Promise<{salt:string}> => {
  return new Promise(async (resolve, reject) => {
    try {
      const salt = s ? s : createSalt();
      const db = getFirestore(FbApp)
      setDoc(doc(db, data.email, "salt"), {
        salt: salt,
      }).then(() => {
        resolve({salt: salt});
      }).catch((err) => {
        reject({error: err});
      });
    } catch (error) {
      reject({error: error});
    }
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