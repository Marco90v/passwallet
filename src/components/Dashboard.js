// import cryptoJs from "crypto-js";
import { getAuth, signOut } from "firebase/auth";
import { doc } from "firebase/firestore";
import { useEffect, useState } from "react";
// import { ListGroup } from "react-bootstrap";
import { useFirebaseApp, useFirestore, useFirestoreDocData, useUser } from "reactfire";
import { decrypt } from "../function/firebase";
import { GeneratePass } from "../function/GeneratePass";
import FormAbout from "../templete/FormAbout";
import TemplateDashboard from "../templete/TemplateDashboard";
import List from "./List";
import New from "./New";
import SeeEdit from "./SeeEdit";
import Setting from "./Setting";

const Dashboard = () => {
    
    const [id, setId] = useState(null);
    const [action, setAction] = useState(0);
    const [data,setData] = useState({data:[]});
    const [gPass,setGPass] = useState({gPass:""});
    const uFirebase = useFirestore();
    const app = useFirebaseApp();
    const auth = getAuth(app);
    const {data:uid} = useUser();
    const ref = doc(uFirebase, uid.uid, 'data');
    const { data: d } = useFirestoreDocData(ref);
    const ref2 = doc(uFirebase, uid.uid, 'config');
    const { data: c } = useFirestoreDocData(ref2);
    
    useEffect(() => {
        if(d !== undefined){
            const decrypted = JSON.parse(decrypt(d));
            if(c !== undefined && c.order !== 0) {
                if(c.order===1){
                    decrypted.sort((a,b)=>{
                        if (a["Name"].toLowerCase() > b["Name"].toLowerCase()) {return 1};
                        if (a["Name"].toLowerCase() < b["Name"].toLowerCase()) {return -1};
                        return 0;
                    });
                }else{
                    decrypted.sort((a,b)=>{ return a['type']-b['type'] });
                }
            }
            // setData({ data : JSON.parse(decrypted) });
            setData({ data : decrypted });
        }
        return () => {}
    }, [d,c]);
  

    const changeAction = (value) => { setAction(value); }

    const  generatePass = () => setGPass({gPass:GeneratePass()});

    const close = () => signOut(auth).then(() => localStorage.removeItem("temp")).catch(error => console.log(error));

    const elementos = () => {
        switch (action) {
            case 0:
                return <List data={data} setData={setData} changeAction={changeAction} id={id} setId={setId} />
            case 1:
                return <New data={data} setData={setData} />
            case 2:
                return <SeeEdit data={data} setData={setData} id={id} />
            case 3:
                return <Setting data={data} setData={setData} config={c} />
            case 4:
                return <FormAbout />
            default:
                break;
        }
    }
    // const typeData = () => {
    //     return (
    //         <ListGroup horizontal >
    //             <ListGroup.Item>This</ListGroup.Item>
    //             <ListGroup.Item>ListGroup</ListGroup.Item>
    //             <ListGroup.Item>renders</ListGroup.Item>
    //             <ListGroup.Item>horizontally!</ListGroup.Item>
    //         </ListGroup>
    //     );
    // }

    return(
        <>
            <TemplateDashboard changeAction={changeAction} generatePass={generatePass} gPass={gPass.gPass} close={close} />
            {/* {typeData()} */}
            {elementos()}
        </>
    );

}

export default Dashboard;