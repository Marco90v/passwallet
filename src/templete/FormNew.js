import { Alert, Button, Col, Form, Row } from "react-bootstrap";

const FormNew = ({type=0,save,changeForm,typeForm,element,n_e,edit,disa,alert}) => {

    return(
        <Form onSubmit={save}>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalSelect">
                <Col xs="auto" md={{ span: 2, offset: 5 }} className="my-1">
                    <Form.Select md={{ span: 2, offset: 4 }} defaultValue={type} onChange={e=>changeForm(parseInt(e.target.value))} className="me-sm-2" id="inlineFormCustomSelect" disabled={disa}>
                        {typeForm.map((e,i)=> {return (<option key={i} id={i} value={i}>{e.form}</option>)} )}
                    </Form.Select>
                </Col>
            </Form.Group>

            {element()}

            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 1, offset: 5 }}>
                    <Button variant="success" type="submit" size="sm" disabled={disa}>Save</Button>
                </Col>
                {
                    n_e &&  <Col sm={{ span: 1, offset: 0 }}>
                                <Button variant={disa ? "warning" : "danger"} size="sm" onClick={edit}> { disa===true ? "Edit" : "Cancel" } </Button>
                            </Col>
                }
            </Form.Group>
            <Form.Group>
                <Col sm={{ span: 4, offset: 5 }}>
                    <Alert variant={alert.type}>
                        {alert.msg}
                    </Alert>
                </Col>
            </Form.Group>
        </Form>
    );
}


export default FormNew;