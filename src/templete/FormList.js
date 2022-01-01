import { Button, Modal, Table } from "react-bootstrap";
import { FcViewDetails, FcEmptyTrash } from "react-icons/fc";

const FormList = ({data,eliminar,handleClose,show,msgModal,save,SeeEdit}) => {
    /**
     * variant="dark" <-- modo oscuro para la tabla
     */
    
    return(
        <>
            <Table striped bordered hover size="sm" style={{width:"50%"}} className="animate__animated animate__fadeInLeft">
                <thead>
                    <tr>
                        <th style={{width:"50px",textAlign:"center"}} ><FcEmptyTrash /></th>
                        <th>Name</th>
                        <th style={{width:"50px",textAlign:"center"}} ><FcViewDetails /></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.data.map(
                            (e,i) => { 
                                return (
                                    <tr key={i}>
                                        <td style={{width:"50px",textAlign:"center"}} onClick={()=>eliminar(i,e.Name)} ><FcEmptyTrash /></td>
                                        <td>{e.Name}</td>
                                        <td style={{width:"50px",textAlign:"center"}} onClick={()=>SeeEdit(i)} ><FcViewDetails /></td>
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