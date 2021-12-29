import cryptoJs from "crypto-js";
import { doc, setDoc } from "firebase/firestore";

const firebase = () => {
    const firebaseConfig = {
      apiKey: "AIzaSyDi8bEuFPPF8okv_WjdMEuAupUG836KHDs",
      authDomain: "prueba-2f917.firebaseapp.com",
      projectId: "prueba-2f917",
      storageBucket: "prueba-2f917.appspot.com",
      messagingSenderId: "1028798509980",
      appId: "1:1028798509980:web:4c5a6b75617ad842b34e59"
    };
    return firebaseConfig;
}

const encrypt = (data) => {
  const encrypted = cryptoJs.AES.encrypt(JSON.stringify(data.data), "123456789");
  return encrypted;
}

const decrypt = (data) => {
  const decrypted = cryptoJs.AES.decrypt(data.data, "123456789");
  return decrypted.toString(cryptoJs.enc.Utf8);
}

const saveFirebase = (data,encrypted,setData,uFirebase,uid,setAlert=undefined,reset=undefined) => {
  const cityRef = doc(uFirebase, uid.uid, "data");
  setDoc(cityRef, { 'data': encrypted.toString() }).then(()=>{
    setData({...data,data:data.data});
    if(setAlert!==undefined){
      setAlert({msg:"Aggregate Data.",type:"success"});
      setTimeout(() => setAlert({msg:"",type:""}), 3000);
      reset();
    }
  }).catch(error=> {
    if(setAlert!==undefined){
      setAlert({msg:"An error occurred while adding data.",type:"danger"});
      setTimeout(() => setAlert({msg:"",type:""}), 3000);
    }
  } );
}

export {firebase, encrypt, decrypt, saveFirebase}

