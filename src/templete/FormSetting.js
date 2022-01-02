import { Alert, Button, Col, Form, Row } from "react-bootstrap";

const FormSetting = ({input,setInput,changePass,deleteData,alert}) => {

    const {oldPass,newPass,currentPass} = input;

    return(
        <Form className="animate__animated animate__fadeInLeft">
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
                <Col sm={{ span: 1, offset: 5 }}>
                    <Button variant="success" type="button" size="sm" onClick={changePass} >Change Password</Button>
                </Col>
            </Form.Group>

            {/* Eliminar Usuario */}
            <Form.Group as={Row} className="mb-3" controlId="currentPassword">
                <Form.Label md={{ span: 2, offset: 3 }} column="sm" sm={2}>Current Password</Form.Label>
                <Col sm={4}>
                    <Form.Control size="sm" type="text" placeholder="Current Password" name="currentPass" value={currentPass} onChange={(e)=>{setInput(e)}} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 1, offset: 5 }}>
                    <Button variant="danger" type="button" size="sm" onClick={deleteData} >Delete Account</Button>
                </Col>
            </Form.Group>

            <Form.Group>
                <Col sm={{ span: 4, offset: 5 }}>
                    <Alert variant={alert.type} className={alert.ani} > {alert.msg} </Alert>
                </Col>
            </Form.Group>
        </Form>
    );

}

export default FormSetting;