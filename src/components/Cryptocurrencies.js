import { useEffect } from "react";
import { Col, Form, Row } from "react-bootstrap";

const Cryptocurrencies = ({input,setInput}) => {
    const {Name,URL,User,Email,Password,Wallet,SecretPhr} = input;
    // useEffect(() => {
    //     console.log("input");
    //     return () => { }
    // }, [input]);
    return(
        <>
            <Form.Group as={Row} className="mb-3" controlId="Name">
                <Form.Label md={{ span: 2, offset: 3 }} column="sm" sm={2}>Name</Form.Label>
                <Col sm={4}>
                    <Form.Control size="sm" type="text" placeholder="Name" name="Name" value={Name} onChange={(e)=>{setInput(e)}} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="URL">
                <Form.Label md={{ span: 2, offset: 3 }} column="sm" sm={2}>URL</Form.Label>
                <Col sm={4}>
                    <Form.Control size="sm" type="text" placeholder="URL" name="URL" value={URL} onChange={(e)=>{setInput(e)}} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="User">
                <Form.Label md={{ span: 2, offset: 3 }} column="sm" sm={2}>User</Form.Label>
                <Col sm={4}>
                    <Form.Control size="sm" type="text" placeholder="User" name="User" value={User} onChange={(e)=>{setInput(e)}} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="Email">
                <Form.Label md={{ span: 2, offset: 3 }} column="sm" sm={2}>Email</Form.Label>
                <Col sm={4}>
                    <Form.Control size="sm" type="text" placeholder="Email" name="Email" value={Email} onChange={(e)=>{setInput(e)}} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="Password">
                <Form.Label md={{ span: 2, offset: 3 }} column="sm" sm={2}>Password</Form.Label>
                <Col sm={4}>
                    <Form.Control size="sm" type="text" placeholder="Password" name="Password" value={Password} onChange={(e)=>{setInput(e)}} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="Wallet">
                <Form.Label md={{ span: 2, offset: 3 }} column="sm" sm={2}>Wallet</Form.Label>
                <Col sm={4}>
                    <Form.Control size="sm" type="text" placeholder="Wallet" name="Wallet" value={Wallet} onChange={(e)=>{setInput(e)}} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="SecretPhr">
                <Form.Label md={{ span: 2, offset: 3 }} column="sm" sm={2}>SecretPhr</Form.Label>
                <Col sm={4}>
                    <Form.Control size="sm" type="text" placeholder="SecretPhr" name="SecretPhr" value={SecretPhr} onChange={(e)=>{setInput(e)}} />
                </Col>
            </Form.Group>

        </>
    );
}

export default Cryptocurrencies;