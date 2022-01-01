import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";
import { useState } from "react";
import useInput from "../hooks/useInput";
import FormLogin from "../templete/FormLogin";

const SignIn = ({setstate}) =>{
    
    const [validated, setValidated] = useState(false);
    const [input, setInput] = useInput({email:'',pass:''});
    const {email,pass} = input;
    const [alert, setAlert] = useState('');
    const [wait, setWait] = useState(false);

    const signIn = (e) =>{
        e.preventDefault();
        setValidated(true);
        setWait(true);
        setAlert('');
        if (e.currentTarget.checkValidity() !== false){
            signInWithEmailAndPassword(getAuth(), email, pass)
            .then( userCredential => {
                localStorage.setItem("temp",pass);
                setWait(false)
            })
            .catch((error) => {
                switch (error.code) {
                    case "auth/wrong-password":
                        setAlert('Wrong password');
                        break;
                    case "auth/user-not-found":
                        setAlert('User not found');
                        break;
                    default:
                        break;
                }
                setWait(false);
            });
        }else{ setWait(false); }
    }

    const createAccount = () => setstate(false);

    const props = {signIn,createAccount,validated,input,setInput,alert,wait};

    return( <FormLogin props={props} /> );

}

export default SignIn;