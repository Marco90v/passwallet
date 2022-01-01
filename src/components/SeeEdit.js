import { useState } from "react";
import { useFirestore, useUser } from "reactfire";
import { encrypt, saveFirebase } from "../function/firebase";
import useInput from "../hooks/useInput";
import FormNew from "../templete/FormNew";
import {changeElement, GetTypeElement,typeForm} from "./GetTypeElement";

const SeeEdit = ({data,setData,id}) => {
    const datos = data.data.filter((e,i)=> {return i===id && e})[0];

    const [form, setForm] = useState(datos.type);
    const [input, setInput, reset] = useInput({...datos});
    const [disa, setDisa] = useState(true);
    const [alert, setAlert] = useState({msg:"",type:""});

    const uFirebase = useFirestore();
    const {data:uid} = useUser();

    const changeForm = (id) => changeElement(id,reset,setForm,datos);
    
    const save = (e) => {
        e.preventDefault();
        const d = {data: data.data.map((x,i)=>{ return i===id ? input : x })};
        const enc = encrypt(d);
        saveFirebase(d,enc,setData,uFirebase,uid,setAlert);
    }

    const edit = () => setDisa(!disa);

    const element = () => GetTypeElement(form,input,setInput,disa);
    
    return( <FormNew type={datos.type} data={datos} save={save} changeForm={changeForm} typeForm={typeForm} element={element} n_e={true} edit={edit} disa={disa} alert={alert} /> );
}

export default SeeEdit;