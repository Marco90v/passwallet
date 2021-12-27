import { useState } from "react";
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

    const changeForm = (id) => {
        switch (id) {
            case 0:
                setForm(id);
                reset({
                    type:datos.type || "",
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
                    type:datos.type  || "",
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
                    type:datos.type || "",
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
        console.log(input);
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
        <FormNew type={datos.type} data={datos} save={save} changeForm={changeForm} typeForm={typeForm} element={element} />
    );
}

export default SeeEdit;