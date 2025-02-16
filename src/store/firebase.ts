import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { FirebaseApp, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from 'firebase/firestore';

const apiKey = import.meta.env.apiKey;
const authDomain = import.meta.env.authDomain;
const projectId = import.meta.env.projectId;
const storageBucket = import.meta.env.storageBucket;
const messagingSenderId = import.meta.env.messagingSenderId;
const appId = import.meta.env.appId;
const measurementId = import.meta.env.measurementId;


const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
};
// const appFirebase = initializeApp(firebaseConfig);

interface State {
  appFirebase: FirebaseApp
}
interface Action {
  // db: Firestore
}

const useStoreFirebase = create<State & Action>()(
  devtools(
    persist(
      (set, get) => ({
        appFirebase: initializeApp(firebaseConfig),
        // db: getFirestore(get().appFirebase)
      }),
      { name: 'storeSession' }
    )
  )
)

export {useStoreFirebase}