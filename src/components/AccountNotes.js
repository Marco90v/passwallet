import { Col, Form, FormControl, Row } from "react-bootstrap";

const AccountNotes = ({input,setInput,disa}) => {

    const {Name,Notes} = input;

    return(
        <>
            <Form.Group as={Row} className="mb-3" controlId="Name">
                <Form.Label md={{ span: 2, offset: 3 }} column="sm" sm={2}>Name</Form.Label>
                <Col sm={4}>
                    <Form.Control size="sm" type="text" placeholder="Name" name="Name" value={Name} onChange={(e)=>{setInput(e)}} disabled={disa} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="Notes">
                <Form.Label md={{ span: 2, offset: 3 }} column="sm" sm={2}>Notes</Form.Label>
                <Col sm={4}>
                    <FormControl as="textarea" aria-label="With textarea" size="sm" placeholder="Notes" name="Notes" value={Notes} onChange={(e)=>{setInput(e)}} disabled={disa} />
                </Col>
            </Form.Group>
        </>
    );

}

export default AccountNotes;