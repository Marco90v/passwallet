import { useFirestore, useUser } from "reactfire";
import { useState } from "react";
import { encrypt, saveFirebase } from "../function/firebase";
import useInput from "../hooks/useInput";
import FormNew from "../templete/FormNew";
import {changeElement, GetTypeElement,typeForm} from "./GetTypeElement";

const New = ({type=0,data,setData}) => {

    const uFirebase = useFirestore();
    const {data:uid} = useUser();
    const [alert, setAlert] = useState({msg:"",type:""});
    const [input, setInput, reset] = useInput({type,Name:"",URL:"",User:"",Email:"",Password:""});

    const changeForm = (id) => changeElement(id,reset);

    const save = (e) => {
        e.preventDefault();
        let datos = [];
        datos = data.data;
        datos.push(input);
        const enc = encrypt({data:datos});
        saveFirebase(datos,enc,setData,uFirebase,uid,setAlert,reset);
    }

    const element = () =>  GetTypeElement(input,setInput,false);

    const props = {type,save,changeForm,typeForm,element,n_e:false,alert};

    return( <FormNew props={props} /> );

}

export default New;