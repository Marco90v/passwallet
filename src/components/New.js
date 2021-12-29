import { useFirestore, useUser } from "reactfire";
import { useState } from "react";
import useInput from "../hooks/useInput";
import FormNew from "../templete/FormNew";
import BankAccounts from "./BankAccounts";
import Cryptocurrencies from "./Cryptocurrencies";
import SocialNetworking from "./SocialNetworking";
import { encrypt, saveFirebase } from "../function/firebase";

const New = ({type=0,data,setData}) => {

    const typeForm = [
        {"form":"Social Networking"}, 
        {"form":"Bank Accounts"}, 
        {"form":"Cryptocurrencies"}
    ];

    const uFirebase = useFirestore();
    const {data:uid} = useUser();
    const [form, setForm] = useState(type);
    const [alert, setAlert] = useState({msg:"",type:""});
    const [input, setInput, reset] = useInput({type,Name:"",URL:"",User:"",Email:"",Password:""});

    const changeForm = (id) => {
        switch (id) {
            case 0:
                reset({type:id,Name:"",URL:"",User:"",Email:"",Password:""});
                setForm(id);
                break;
            case 1:
                reset({type:id,Name:"",URL:"",User:"",Email:"",Password:"",AccNum:"",CardNum:"",ExpDate:"",CVV:"",PasswordCard:""});
                setForm(id);
                break;
            case 2:
                reset({type:id,Name:"",URL:"",User:"",Email:"",Password:"",Wallet:"",SecretPhr:""});
                setForm(id);
                break;
            default:
                break;
        }
    }

    const save = (e) => {
        e.preventDefault();
        let datos = [];
        datos = data.data;
        datos.push(input);
        const enc = encrypt({data:datos});
        saveFirebase(datos,enc,setData,uFirebase,uid,setAlert,reset);
    }

    const element = () => {
        switch (form) {
            case 0:
                return <SocialNetworking input={input} setInput={setInput} />;
            case 1:
                return <BankAccounts input={input} setInput={setInput} />;
            case 2:
                return <Cryptocurrencies input={input} setInput={setInput} />;
            default:
                break;
        }
    }

    return(
        <FormNew type={type} data={data} setData={setData} save={save} changeForm={changeForm} typeForm={typeForm} element={element} n_e={false} alert={alert} />
    );

}

export default New;