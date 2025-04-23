import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { FirebaseApp, initializeApp } from "firebase/app";

interface State {
  appFirebase: FirebaseApp
}

interface Action {
}

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

const useStoreFirebase = create<State & Action>()(
  devtools(
    persist(
      () => ({
        appFirebase: initializeApp(firebaseConfig),
      }),
      { name: 'storeSession' }
    )
  )
)

export {useStoreFirebase}