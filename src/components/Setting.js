import { useState } from "react";
import { useFirestore, useUser } from "reactfire";
import { changePassword, encrypt, handleAlert, saveFirebase } from "../function/firebase";
import useInput from "../hooks/useInput";
import FormSetting from "../templete/FormSetting";

const Setting = ({data,setData}) => {
    const uFirebase = useFirestore();
    const {data:user} = useUser();
    const [alert, setAlert] = useState({msg:"",type:"", ani:""});
    const [input, setInput, reset] = useInput({oldPass:"",newPass:"",currentPass:""});

    const changePass = () => {
        if(input.oldPass === localStorage.getItem("temp") && input.newPass!=="" && input.newPass.length >= 6){
            changePassword(user.auth.currentUser,input.newPass,data.data,uFirebase,user,setAlert,reset);
        }else{ handleAlert(setAlert,"Wrong previous password.","danger"); }
    }

    const deleteData = () => {
        if(input.currentPass === localStorage.getItem("temp")){
            const enc = encrypt({data:[]});
            saveFirebase(enc,enc,setData,uFirebase,user,setAlert,reset);
        }else{ handleAlert(setAlert,"Incorrect password.","danger"); }
    }

    return(<FormSetting input={input} setInput={setInput} changePass={changePass} deleteData={deleteData} alert={alert} />);

}

export default Setting;