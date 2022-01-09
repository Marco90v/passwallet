import { FcAddDatabase } from "react-icons/fc";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { RiFileEditLine } from "react-icons/ri";
import { ImCancelCircle } from "react-icons/im";

const FormNew = ({props}) => {

    const {type=0,save,changeForm,typeForm,element,n_e,edit,disa,alert} = props

    return(
        <Form onSubmit={save} className="animate__animated animate__fadeInLeft" style={{marginTop: "2rem"}}>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalSelect">
                <Col xs="auto" md={{ span: 2, offset: 5 }} className="my-1">
                    <Form.Select size="sm" md={{ span: 2, offset: 4 }} defaultValue={type} onChange={e=>changeForm(parseInt(e.target.value))} className="me-sm-2" id="inlineFormCustomSelect" disabled={disa}>
                        {typeForm.map((e,i)=> {return (<option key={i} id={i} value={i}>{e.form}</option>)} )}
                    </Form.Select>
                </Col>
            </Form.Group>

            {element()}

            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 1, offset: 5 }}>
                    <Button variant="success" type="submit" size="sm" disabled={disa}>Save <FcAddDatabase style={{marginTop: "-2px"}} /> </Button>
                </Col>
                {
                    n_e &&  <Col sm={{ span: 1, offset: 0 }}>
                                <Button variant={disa ? "warning" : "danger"} size="sm" onClick={edit}>
                                    { disa===true ? "Edit" : "Cancel" } { disa===true ? <RiFileEditLine style={{marginTop: "-3px"}} /> : <ImCancelCircle style={{marginTop: "-3px"}} /> }
                                </Button>
                            </Col>
                }
            </Form.Group>
            <Form.Group>
                <Col sm={{ span: 4, offset: 5 }}>
                    <Alert variant={alert.type} className={alert.ani}> {alert.msg} </Alert>
                </Col>
            </Form.Group>
        </Form>
    );
}


export default FormNew;