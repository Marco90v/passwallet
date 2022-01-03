import { useState } from "react";
import { Button, Col, Form, FormControl } from "react-bootstrap";
import { GeneratePass } from "../function/GeneratePass";
import { FaRandom } from "react-icons/fa";

const Generate = () => {
    const [{gPass},setGPass] = useState({gPass:""});

    const g = () => setGPass({gPass:GeneratePass()});

    return (
        <Col sm={{ span: 4, offset: 1}}>
            <Form.Group className="d-flex">
                <FormControl type="text" placeholder="************" className="me-2" aria-label="passGenerate" size="sm" name="gPass" value={gPass} style={{width:"66%"}}  disabled />
                <Button variant="outline-success" size="sm" onClick={g} >Generate <FaRandom style={{marginTop: "-1px"}} /></Button>
            </Form.Group>
        </Col>
    );

}

export default Generate;