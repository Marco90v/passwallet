import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebase = () => {
    const firebaseConfig = {
      apiKey: "AIzaSyDi8bEuFPPF8okv_WjdMEuAupUG836KHDs",
      authDomain: "prueba-2f917.firebaseapp.com",
      projectId: "prueba-2f917",
      storageBucket: "prueba-2f917.appspot.com",
      messagingSenderId: "1028798509980",
      appId: "1:1028798509980:web:4c5a6b75617ad842b34e59"
    };
    
    const app = initializeApp(firebaseConfig);
    
    const db = getFirestore(app);

    // return {app, db};

}

export default firebase;

