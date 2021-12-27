import { Button, Col, Form, Row } from "react-bootstrap";

const FormNew = ({type=0,save,changeForm,typeForm,element}) => {

    return(
        <Form onSubmit={save}>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalSelect">
                <Col xs="auto" md={{ span: 2, offset: 5 }} className="my-1">
                    <Form.Select md={{ span: 2, offset: 4 }} defaultValue={type} onChange={e=>changeForm(parseInt(e.target.value))} className="me-sm-2" id="inlineFormCustomSelect">
                        {typeForm.map((e,i)=> {return (<option key={i} id={i} value={i}>{e.form}</option>)} )}
                    </Form.Select>
                </Col>
            </Form.Group>

            {element()}

            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 1, offset: 5 }}>
                    <Button type="submit" size="sm">Save</Button>
                </Col>
            </Form.Group>
        </Form>
    );
}


export default FormNew;