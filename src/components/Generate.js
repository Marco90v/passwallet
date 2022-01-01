import { useState } from "react";
import { Button, Col, Form, FormControl } from "react-bootstrap";
import { GeneratePass } from "../function/GeneratePass";

const Generate = () => {
    const [{gPass},setGPass] = useState({gPass:""});

    const g = () => setGPass({gPass:GeneratePass()});

    return (
        <Col sm={{ span: 3, offset: 2}}>
            <Form.Group className="d-flex">
                <FormControl type="text" placeholder="************" className="me-2" aria-label="passGenerate" size="sm" name="gPass" value={gPass}  disabled />
                <Button variant="outline-success" size="sm" onClick={g} >Generate</Button>
            </Form.Group>
        </Col>
    );

}

export default Generate;