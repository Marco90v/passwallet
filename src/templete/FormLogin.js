import logoIni from "../assets/lock.png";
import { Col, Form, Row, Button, Image, Alert } from "react-bootstrap";
import { ImSpinner2 } from "react-icons/im";


const FormLogin = ({props}) => {

    const {signIn,createAccount,validated,input,setInput,alert,wait} = props;
    const {email,pass} = input;

    return(
        <>
            <Row className="justify-content-md-center contenLogo">
                <Col lg="1">
                    <Image className="logoIni" src={logoIni} rounded />
                    <span className="position-absolute top-0 start-50 translate-middle-x title">Password Wallet</span>
                </Col>
            </Row>
            <Form noValidate validated={validated} className="g-3 FormCreate" onSubmit={signIn}>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>Email</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="email" placeholder="Email" name="email" value={email} onChange={(e)=>{setInput(e)}} required  />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Please choose a email.</Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>Password</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="password" placeholder="Password" name="pass" value={pass} onChange={(e)=>{setInput(e)}} required />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Please choose a password.</Form.Control.Feedback>
                    </Col>
                </Form.Group>

                {
                    (alert !== '') &&
                    <Form.Group as={Row} className="mb-3" controlId="RePassword">
                        <Col sm={{span:10,  offset: 2}}>
                            <Alert variant={'danger'}> {alert} </Alert> 
                        </Col>
                    </Form.Group>
                }

                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 2, offset: 2 }}>
                        <Button type="submit">Sign in {wait && <ImSpinner2 className="spinner" />} </Button>
                    </Col>
                    <Col sm={{ span: 3}}>
                        <Button variant="link" onClick={()=>{createAccount()}} >Create an Account</Button>
                    </Col>
                </Form.Group>
            </Form>
        </>
    );
}

export default FormLogin;