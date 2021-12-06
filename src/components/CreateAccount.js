import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import useInput from '../hooks/useInput';
import FormRegister from '../templete/FormRegister';

const CreateAccount = ({setstate}) => {

    const [validated, setValidated] = useState(false);
    const [input, setInput] = useInput({email:'',pass:'',rePass:''});
    const {email,pass,rePass} = input;
    const [alert, setAlert] = useState('');
    const [wait, setWait] = useState(false);

    const create = (e) => {
        e.preventDefault();
        setWait(true);
        setAlert('');
        setValidated(true);
        if (e.currentTarget.checkValidity() === true && pass === rePass){
            // e.stopPropagation();
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                setstate(true);
            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                // console.log(errorCode);
                switch (errorCode) {
                    case "auth/email-already-in-use":
                        setAlert('Email is already in use.');
                        break;
                    case "auth/invalid-email":
                        setAlert('Invalid e-mail.');
                        break;
                    case "auth/weak-password":
                        setAlert('Weak password.');
                        break;
                    default:
                        break;
                }
                
                // if (errorCode === "auth/email-already-in-use"){
                //     setAlert('Email is already in use.');
                // }else{
                //     setAlert('Error');
                // }
                setWait(false);
            });
        }else{
            setAlert("Password does not match.");
            setWait(false);
        }
    }

    const signIn = () => {
        setstate(true);
    }

    const props = {validated,create,signIn,input,setInput,alert,wait};

    return(
        <>
            <FormRegister props={props} />
        </>
    );
}

export default CreateAccount;