import Inputs from "./Inputs";

const typeForm = [ {"form":"Web Site"}, {"form":"Bank Accounts"}, {"form":"Cryptocurrencies"}, {"form":"Notes"} ];

const changeElement = (id,reset,datos) => {
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
            break;
        case 3:
            datos === undefined ? reset({type:id,Name:"",Notes:""}) : 
            reset({type:id,
                Name:datos.Name || "",
                Notes:datos.Notes || "",
            });
            break;
        default:
            break;
    }
}

const GetTypeElement = (input,setInput,disa=false,n_e,copiar) => <Inputs input={input} setInput={setInput} disa={disa} n_e={n_e} copiar={copiar} />;

export {GetTypeElement,typeForm,changeElement};