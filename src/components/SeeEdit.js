import { useState } from "react";
import { useFirestore, useUser } from "reactfire";
import { encrypt, saveFirebase } from "../function/firebase";
import useInput from "../hooks/useInput";
import FormNew from "../templete/FormNew";
import BankAccounts from "./BankAccounts";
import Cryptocurrencies from "./Cryptocurrencies";
import SocialNetworking from "./SocialNetworking";
// import New from "./New";

const SeeEdit = ({data,setData,id}) => {
    const datos = data.data.filter((e,i)=> {return i===id && e})[0];

    const typeForm = [
        {"form":"Social Networking"}, 
        {"form":"Bank Accounts"}, 
        {"form":"Cryptocurrencies"}
    ];

    const [form, setForm] = useState(datos.type);
    const [input, setInput, reset] = useInput({...datos});
    const [disa, setDisa] = useState(true);
    const [alert, setAlert] = useState({msg:"",type:""});

    const uFirebase = useFirestore();
    const {data:uid} = useUser();

    const changeForm = (id) => {
        switch (id) {
            case 0:
                setForm(id);
                reset({
                    type:id || "",
                    Name:datos.Name || "",
                    URL:datos.URL || "",
                    User:datos.User || "",
                    Email:datos.Email || "",
                    Password:datos.Password || ""
                });
                break;
            case 1:
                setForm(id);
                reset({
                    type:id  || "",
                    Name:datos.Name  || "",
                    URL:datos.URL  || "",
                    User:datos.User  || "",
                    Email:datos.Email  || "",
                    Password:datos.Password  || "",
                    AccNum:datos.AccNum  || "",
                    CardNum:datos.CardNum  || "",
                    ExpDate:datos.ExpDate  || "",
                    CVV:datos.CVV  || "",
                    PasswordCard:datos.PasswordCard || ""
                });
                break;
            case 2:
                setForm(id);
                reset({
                    type:id || "",
                    Name:datos.Name || "",
                    URL:datos.URL || "",
                    User:datos.User || "",
                    Email:datos.Email || "",
                    Password:datos.Password || "",
                    Wallet:datos.Wallet || "",
                    SecretPhr:datos.SecretPhr || ""
                });
                break;
            default:
                break;
        }
    }
    
    const save = (e) => {
        e.preventDefault();
        const d = {data: data.data.map((x,i)=>{ return i===id ? input : x })};
        const enc = encrypt(d);
        saveFirebase(d,enc,setData,uFirebase,uid,setAlert);
    }

    const edit = () => {
        setDisa(!disa);
    }

    const element = () => {
        switch (form) {
            case 0:
                return <SocialNetworking input={input} setInput={setInput} disa={disa} />;
            case 1:
                return <BankAccounts input={input} setInput={setInput} disa={disa} />;
            case 2:
                return <Cryptocurrencies input={input} setInput={setInput} disa={disa} />;
            default:
                break;
        }
    }
    
    return(
        <FormNew type={datos.type} data={datos} save={save} changeForm={changeForm} typeForm={typeForm} element={element} n_e={true} edit={edit} disa={disa} alert={alert} />
    );
}

export default SeeEdit;