import cryptoJs from "crypto-js";
import { updatePassword } from "firebase/auth";
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

const encrypt = data => cryptoJs.AES.encrypt(JSON.stringify(data.data), localStorage.getItem("temp"));

const decrypt = data => cryptoJs.AES.decrypt(data.data, localStorage.getItem("temp")).toString(cryptoJs.enc.Utf8);

const handleAlert =(setAlert,msg,type,reset) => {
  setAlert({msg,type, ani:"animate__animated animate__bounceIn"});
  setTimeout(() => setAlert(e => { return {...e,ani:"animate__animated animate__bounceOut" } }), 2000);
  setTimeout(() => setAlert({msg:"",type:""}), 3000);
  reset!==undefined && reset();
}

const saveFirebase = (data=undefined,encrypted,setData=undefined,uFirebase,uid,setAlert=undefined,reset=undefined) => {
  const cityRef = doc(uFirebase, uid.uid, "data");
  setDoc(cityRef, { 'data': encrypted.toString() }).then(()=>{
    setData !== undefined && setData({...data,data:data.data});
    if(setAlert!==undefined){ handleAlert(setAlert,"Aggregate Data.","success",reset); }
  }).catch(error=> {
    if(setAlert!==undefined){ handleAlert(setAlert,"An error occurred while adding data.","danger"); }
  });
}

const changePassword = (currentUser,newPass,data,uFirebase,uid,setAlert,reset) => {
  updatePassword(currentUser, newPass).then(() => {
    localStorage.setItem("temp",newPass);
    const enc = encrypt({data:data});
    saveFirebase(undefined,enc,undefined,uFirebase,uid,setAlert,reset);
}).catch((error) => {
    handleAlert(setAlert,"An error occurred when changing the password.","danger");
});
}

export {firebase, encrypt, decrypt, saveFirebase, changePassword, handleAlert}

