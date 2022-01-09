import cryptoJs from "crypto-js";
import { updatePassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const firebase = () => {
    const firebaseConfig = {
      apiKey: "AIzaSyAqiHj0iaHv3a6fTkPFaTJeb_eAtAc_Auw",
      authDomain: "passwallet-d8c64.firebaseapp.com",
      projectId: "passwallet-d8c64",
      storageBucket: "passwallet-d8c64.appspot.com",
      messagingSenderId: "711833623616",
      appId: "1:711833623616:web:f27313a19cd9197c8113a5",
      measurementId: "G-9M47XVG7N8"
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

const saveConfig = (order,uFirebase,uid,setAlert=undefined,reset=undefined) => {
  const cityRef = doc(uFirebase, uid.uid, "config");
  setDoc(cityRef, { 'order':order }).then(()=>{
    if(setAlert!==undefined){ handleAlert(setAlert,"Saved configuration.","success",reset); }
  }).catch(error=> {
    if(setAlert!==undefined){ handleAlert(setAlert,"Error saving configuration.","danger"); }
  });
}

export {firebase, encrypt, decrypt, saveFirebase, changePassword, handleAlert,saveConfig}

