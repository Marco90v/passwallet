import { useState } from "react";
import { useFirestore, useUser } from "reactfire";
import { encrypt, saveFirebase } from "../function/firebase";
import FormList from "../templete/FormList";

const List = ({data,setData,changeAction,id,setId}) => {

    const uFirebase = useFirestore();
    const {data:uid} = useUser();

    const [msgModal, setMsgModal] = useState("");
    // const [id, setId] = useState(null);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const eliminar = (id,name) =>{
        setMsgModal(`Do you want to delete the element with the name: ${name}?`);
        setId(id);
        handleShow();
    }

    const save = () => {
        handleClose();
        const datos = {data: data.data.filter((e,i)=>{ return i !== id && e })};
        setId(null);
        const e = encrypt(datos);
        saveFirebase(data,e,setData,uFirebase,uid);
    }

    const SeeEdit = (id) => {
        setId(id);
        changeAction(2);
    }

    return(
        <FormList data={data} eliminar={eliminar} handleClose={handleClose} show={show} msgModal={msgModal} save={save} SeeEdit={SeeEdit} />
    );

}

export default List;