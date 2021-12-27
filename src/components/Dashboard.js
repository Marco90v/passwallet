// import cryptoJs from "crypto-js";
import { doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useFirestore, useFirestoreDocData, useUser } from "reactfire";
import { decrypt } from "../function/firebase";
import TemplateDashboard from "../templete/TemplateDashboard";
import List from "./List";
import New from "./New";
import SeeEdit from "./SeeEdit";

const Dashboard = () => {
    
    const [id, setId] = useState(null);
    const [action, setAction] = useState(0);
    const [data,setData] = useState({data:[]});
    const uFirebase = useFirestore();
    const {data:uid} = useUser();
    const ref = doc(uFirebase, uid.uid, 'data');

    const { data: d } = useFirestoreDocData(ref);
    
    useEffect(() => {
        if(d !== undefined){
            const decrypted = decrypt(d);
            setData({ data : JSON.parse(decrypted) });
        }
        return () => {}
    }, [d]);
  

    const changeAction = (value) => { setAction(value); }

    const elementos = () => {
        switch (action) {
            case 0:
                return <List data={data} setData={setData} changeAction={changeAction} id={id} setId={setId} />
            case 1:
                return <New data={data} setData={setData} />
            case 2:
                return <SeeEdit data={data} setData={setData} id={id} />
            default:
                break;
        }
    }

    return(
        <>
            <TemplateDashboard changeAction={changeAction} />
            {elementos()}
        </>
    );

}

export default Dashboard;