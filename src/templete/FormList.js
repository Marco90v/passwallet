import { Button, Modal, OverlayTrigger, Table, Tooltip } from "react-bootstrap";
import { FcViewDetails, FcEmptyTrash } from "react-icons/fc";
import { typeForm } from "../components/GetTypeElement";

const FormList = ({data,eliminar,handleClose,show,msgModal,save,SeeEdit}) => {
    /**
     * variant="dark" <-- modo oscuro para la tabla
     */

    const color = (i) => {
        switch (i) {
            case 0:
                return "red";
            case 1:
                return "blue";
            case 2:
                return "purple";
            case 3:
                return "green";
            default:
                break;
        }
    }

    
    return(
        <>
            <Table striped bordered hover size="sm" style={{width:"50%", marginTop: "2rem"}} className="animate__animated animate__fadeInLeft">
                <thead>
                    <tr>
                        <th style={{textAlign:"center"}} ><FcEmptyTrash /></th>
                        <th style={{textAlign:"center"}} >Name</th>
                        <th style={{textAlign:"center"}} >Type</th>
                        <th style={{textAlign:"center"}} ><FcViewDetails /></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.data.map(
                            (e,i) => { 
                                return (
                                    <tr key={i}>
                                        <td style={{textAlign:"center"}} onClick={()=>eliminar(i,e.Name)} ><FcEmptyTrash /></td>
                                        <td >{e.Name}</td>
                                            <OverlayTrigger placement="left" overlay={ <Tooltip id={i}> {typeForm[e.type].form} </Tooltip> }>
                                                <td style={{textAlign: "center"}}>
                                                    <div className="divType" style={{backgroundColor: color(e.type)}} ></div>
                                                </td>
                                            </OverlayTrigger>
                                        <td style={{textAlign:"center"}} onClick={()=>SeeEdit(i)} ><FcViewDetails /></td>
                                    </tr>
                                ) 
                            } 
                        )
                    }
                </tbody>
            </Table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>PassWallet</Modal.Title>
                </Modal.Header>
                <Modal.Body>{msgModal}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="danger" onClick={save}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
      </>
    );

}

export default FormList;