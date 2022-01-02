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
    const [msgModal, setMsgModal] = useState("");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const changePass = () => {
        if(input.oldPass === localStorage.getItem("temp") && input.newPass!=="" && input.newPass.length >= 6){
            changePassword(user.auth.currentUser,input.newPass,data.data,uFirebase,user,setAlert,reset);
        }else{ handleAlert(setAlert,"Wrong previous password.","danger"); }
    }

    const deleteData = () => {
        setShow(false);
        setMsgModal("");
        if(input.currentPass === localStorage.getItem("temp")){
            const enc = encrypt({data:[]});
            saveFirebase(enc,enc,setData,uFirebase,user,setAlert,reset);
        }else{ handleAlert(setAlert,"Incorrect password.","danger"); }
    }

    const eliminar = () => {
        setMsgModal("Do you want to delete all data from the database?");
        setShow(true);
    }

    const props = {input,setInput,changePass,deleteData,alert,show,msgModal,handleClose,eliminar};

    return(<FormSetting props={props} />);

}

export default Setting;