import AccountNotes from "./AccountNotes";
import BankAccounts from "./BankAccounts";
import Cryptocurrencies from "./Cryptocurrencies";
import SocialNetworking from "./SocialNetworking";

const typeForm = [ {"form":"Social Networking"}, {"form":"Bank Accounts"}, {"form":"Cryptocurrencies"}, {"form":"Notes"} ];

const changeElement = (id,reset,setForm,datos) => {
    switch (id) {
        case 0:
            datos === undefined ? reset({type:id,Name:"",URL:"",User:"",Email:"",Password:""}) : 
            reset({type:id,
                Name:datos.Name || "",
                URL:datos.URL || "", 
                User:datos.User || "",
                Email:datos.Email || "",
                Password:datos.Password || ""
            });
            setForm(id);
            break;
        case 1:
            datos === undefined ? reset({type:id,Name:"",URL:"",User:"",Email:"",Password:"",AccNum:"",CardNum:"",ExpDate:"",CVV:"",PasswordCard:""}) : 
            reset({type:id,
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
            setForm(id);
            break;
        case 2:
            datos === undefined ? reset({type:id,Name:"",URL:"",User:"",Email:"",Password:"",Wallet:"",SecretPhr:""}) : 
            reset({type:id,
                Name:datos.Name || "",
                URL:datos.URL || "",
                User:datos.User || "",
                Email:datos.Email || "",
                Password:datos.Password || "",
                Wallet:datos.Wallet || "",
                SecretPhr:datos.SecretPhr || ""
            });
            setForm(id);
            break;
        case 3:
            datos === undefined ? reset({type:id,Name:"",Notes:""}) : 
            reset({type:id,
                Name:datos.Name || "",
                Notes:datos.Notes || "",
            });
            setForm(id);
            break;
        default:
            break;
    }
}

const GetTypeElement = (form,input,setInput,disa=false) => {
    switch (form) {
        case 0:
            return <SocialNetworking input={input} setInput={setInput} disa={disa} />;
        case 1:
            return <BankAccounts input={input} setInput={setInput} disa={disa} />;
        case 2:
            return <Cryptocurrencies input={input} setInput={setInput} disa={disa} />;
        case 3:
            return <AccountNotes input={input} setInput={setInput} disa={disa} />;
        default:
            break;
    }
}

export {GetTypeElement,typeForm,changeElement};