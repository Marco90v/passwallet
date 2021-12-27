import cryptoJs from "crypto-js";
import { doc, setDoc } from "firebase/firestore";
import { useFirestore, useUser } from "reactfire";
import { useState } from "react";
import useInput from "../hooks/useInput";
import FormNew from "../templete/FormNew";
import BankAccounts from "./BankAccounts";
import Cryptocurrencies from "./Cryptocurrencies";
import SocialNetworking from "./SocialNetworking";

const New = ({type=0,data,setData}) => {
    // console.log(data);

    const typeForm = [
        {"form":"Social Networking"}, 
        {"form":"Bank Accounts"}, 
        {"form":"Cryptocurrencies"}
    ];

    const uFirebase = useFirestore();
    const {data:uid} = useUser();
    const [form, setForm] = useState(type);
    const [input, setInput, reset] = useInput(data || {type,Name:"",URL:"",User:"",Email:"",Password:""});

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
        setData(e => { return {...e,data:datos} });
        const encrypted = cryptoJs.AES.encrypt(JSON.stringify(data.data), "123456789");

        const cityRef = doc(uFirebase, uid.uid, "data");
        setDoc(cityRef, { 'data': encrypted.toString() }).then(()=>console.log('Document successfully written!')).catch(error=>console.error(error));
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
        <FormNew type={type} data={data} setData={setData} save={save} changeForm={changeForm} typeForm={typeForm} element={element} />
    );

}

export default New;