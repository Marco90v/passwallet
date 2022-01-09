import { useState } from "react";
import { useFirestore, useUser } from "reactfire";
import { encrypt, handleAlert, saveFirebase } from "../function/firebase";
import useInput from "../hooks/useInput";
import FormNew from "../templete/FormNew";
import {changeElement, GetTypeElement,typeForm} from "./GetTypeElement";

const SeeEdit = ({data,setData,id}) => {
    const datos = data.data.filter((e,i)=> {return i===id && e})[0];

    const [input, setInput, reset] = useInput({...datos});
    const [disa, setDisa] = useState(true);
    const [alert, setAlert] = useState({msg:"",type:""});

    const uFirebase = useFirestore();
    const {data:uid} = useUser();

    const changeForm = (id) => changeElement(id,reset,datos);
    
    const save = (e) => {
        e.preventDefault();
        const d = {data: data.data.map((x,i)=>{ return i===id ? input : x })};
        const enc = encrypt(d);
        saveFirebase(d,enc,setData,uFirebase,uid,setAlert);
    }

    const edit = () => {
        !disa && changeForm(datos.type);
        setDisa(!disa);
    };

    const element = () => GetTypeElement(input,setInput,disa,true,copiar);

    const copiar = (valor) => navigator.clipboard.writeText(valor).then(()=> handleAlert(setAlert,"Copying to clipboard","success")).catch(()=> handleAlert(setAlert,"Error when copying to clipboard","danger"));

    const props = {type:input.type,save,changeForm,typeForm,element,n_e:true,edit,disa,alert};
    
    return( <FormNew props={props} /> );
}

export default SeeEdit;