import { useFirestore, useUser } from "reactfire";
import { useState } from "react";
import { encrypt, saveFirebase } from "../function/firebase";
import useInput from "../hooks/useInput";
import FormNew from "../templete/FormNew";
import {changeElement, GetTypeElement,typeForm} from "./GetTypeElement";

const New = ({type=0,data,setData}) => {

    const uFirebase = useFirestore();
    const {data:uid} = useUser();
    const [form, setForm] = useState(type);
    const [alert, setAlert] = useState({msg:"",type:""});
    const [input, setInput, reset] = useInput({type,Name:"",URL:"",User:"",Email:"",Password:""});

    const changeForm = (id) => changeElement(id,reset,setForm);

    const save = (e) => {
        e.preventDefault();
        let datos = [];
        datos = data.data;
        datos.push(input);
        const enc = encrypt({data:datos});
        saveFirebase(datos,enc,setData,uFirebase,uid,setAlert,reset);
    }

    const element = () =>  GetTypeElement(form,input,setInput);

    return( <FormNew type={type} data={data} setData={setData} save={save} changeForm={changeForm} typeForm={typeForm} element={element} n_e={false} alert={alert} /> );

}

export default New;