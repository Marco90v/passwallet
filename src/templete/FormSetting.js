import { Alert, Button, Col, Form, Modal, Row } from "react-bootstrap";
import { FcKey, FcDeleteDatabase, FcCheckmark } from "react-icons/fc";

const FormSetting = ({props}) => {

    const {input,setInput,changePass,deleteData,alert,show,msgModal,handleClose,eliminar,saveOrder,typeOrder,setTypeOrder} = props;
    const {oldPass,newPass,currentPass} = input;
    // const order = config === undefined ? 0 : config.order;

    return(
        <Form className="animate__animated animate__fadeInLeft" style={{marginTop: "2rem"}}>
            {/* Ordernar */}
            <Form.Group as={Row} className="mb-3" controlId="oldPassword">
                <Form.Label md={{ span: 2, offset: 3 }} column="sm" sm={2}>Sort (name, data type)</Form.Label>
                <Col sm={4}>
                <Form.Select size="sm" defaultValue={typeOrder} onChange={e=>setTypeOrder(parseInt(e.target.value))} >
                    <option value={0}>-</option>
                    <option value={1}>Name</option>
                    <option value={2}>Data Type</option>
                </Form.Select>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 2, offset: 5 }}>
                    <Button variant="primary" type="button" size="sm" onClick={saveOrder} >Save <FcCheckmark style={{marginTop: "-3px"}} /> </Button>
                </Col>
            </Form.Group>

            <hr />

            {/* Editar contraseña */}
            <Form.Group as={Row} className="mb-3" controlId="oldPassword">
                <Form.Label md={{ span: 2, offset: 3 }} column="sm" sm={2}>Old Password</Form.Label>
                <Col sm={4}>
                    <Form.Control size="sm" type="text" placeholder="Old Password" name="oldPass" value={oldPass} onChange={(e)=>{setInput(e)}} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="newPassword">
                <Form.Label md={{ span: 2, offset: 3 }} column="sm" sm={2}>New Password (minimum of 6 characters)</Form.Label>
                <Col sm={4}>
                    <Form.Control size="sm" type="text" placeholder="New Password" name="newPass" value={newPass} onChange={(e)=>{setInput(e)}} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 2, offset: 5 }}>
                    <Button variant="success" type="button" size="sm" onClick={changePass} >Change Password <FcKey style={{marginTop: "-3px"}} /> </Button>
                </Col>
            </Form.Group>

            <hr />

            {/* Eliminar Usuario */}
            <Form.Group as={Row} className="mb-3" controlId="currentPassword">
                <Form.Label md={{ span: 2, offset: 3 }} column="sm" sm={2}>Current Password</Form.Label>
                <Col sm={4}>
                    <Form.Control size="sm" type="text" placeholder="Current Password" name="currentPass" value={currentPass} onChange={(e)=>{setInput(e)}} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 1, offset: 5 }}>
                    <Button variant="danger" type="button" size="sm" onClick={eliminar} >Delete Data <FcDeleteDatabase style={{marginTop: "-3px"}} /> </Button>
                </Col>
            </Form.Group>

            <Form.Group>
                <Col sm={{ span: 4, offset: 5 }}>
                    <Alert variant={alert.type} className={alert.ani} > {alert.msg} </Alert>
                </Col>
            </Form.Group>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>PassWallet</Modal.Title>
                </Modal.Header>
                <Modal.Body>{msgModal}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="danger" onClick={deleteData}>Save Changes</Button>
                </Modal.Footer>
            </Modal>

        </Form>
    );

}

export default FormSetting;