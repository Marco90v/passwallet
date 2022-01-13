import logoIni from "../assets/lock.png";
import { Col, Form, Image, Row, Button, Alert } from "react-bootstrap";
import { ImSpinner2 } from "react-icons/im";
import { FcAddDatabase } from "react-icons/fc";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import Generate from "../components/Generate";

const FromRegister = ({props}) => {
    
    const {validated,create,signIn,input,setInput,alert,wait} = props;
    const {email,pass,rePass} = input;

    return(
        <>
            <Row className="justify-content-center contenLogo">
                <Col xs="3" lg="1">
                    <Image className="logoIni" src={logoIni} rounded />
                    <span className="position-absolute top-0 start-50 translate-middle-x title">Password Wallet</span>
                </Col>
            </Row>
            <Form noValidate validated={validated} className="g-3 FormCreate animate__animated animate__fadeIn" onSubmit={create}>

                <Form.Group as={Row} className="mb-3" controlId="Email">
                    <Form.Label column sm={2}>Email</Form.Label>
                    <Col sm={10}>
                        <Form.Control size="sm" type="email" placeholder="Email" name="email" value={email} onChange={(e)=>{setInput(e)}} required  />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Please choose a email.</Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="Password">
                    <Form.Label column sm={2}>Password</Form.Label>
                    <Col sm={10}>
                        <Form.Control size="sm" type="password" placeholder="Password" name="pass" value={pass} onChange={(e)=>{setInput(e)}} required />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Please choose a password.</Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="RePassword">
                    <Form.Label column sm={2}>Repeat Password</Form.Label>
                    <Col sm={10}>
                        <Form.Control size="sm" type="password" placeholder="Password" name="rePass" value={rePass} onChange={(e)=>{setInput(e)}} required />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Please choose a password.</Form.Control.Feedback>
                    </Col>
                </Form.Group>

                {
                    (validated && (pass !== rePass || alert !== '')) &&
                    <Form.Group as={Row} className="mb-3" controlId="RePassword">
                        <Col sm={{span:10,  offset: 2}}>
                            <Alert variant={'danger'}> {alert} </Alert> 
                        </Col>
                    </Form.Group>
                }


                <Form.Group as={Row} className="mb-3">
                    <Col xs={{span:4}} sm={{ span: 2, offset: 2 }}>
                        <Button size="sm" type="submit"><FcAddDatabase style={{marginTop: "-3px"}} /> Sign Up {wait && <ImSpinner2 className="spinner" />} </Button>
                    </Col>
                    <Col xs={{span:7}} sm={{ span: 3}}>
                        <Button size="sm" variant="link" onClick={()=>{signIn()}} >Sign In <HiOutlineSwitchHorizontal /></Button>
                    </Col>
                    {/* Generador de pass */}
                    <Generate />
                </Form.Group>

            </Form>
        </>
    );
}

export default FromRegister;