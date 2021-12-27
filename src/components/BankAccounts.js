import { Col, Form, Row } from "react-bootstrap";

const BankAccounts = ({input,setInput}) => {
    const {Name,URL,User,Email,Password,AccNum,CardNum,ExpDate,CVV,PasswordCard} = input;
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

            <Form.Group as={Row} className="mb-3" controlId="AccNum">
                <Form.Label md={{ span: 2, offset: 3 }} column="sm" sm={2}>AccNum</Form.Label>
                <Col sm={4}>
                    <Form.Control size="sm" type="text" placeholder="AccNum" name="AccNum" value={AccNum} onChange={(e)=>{setInput(e)}} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="CardNum">
                <Form.Label md={{ span: 2, offset: 3 }} column="sm" sm={2}>CardNum</Form.Label>
                <Col sm={4}>
                    <Form.Control size="sm" type="text" placeholder="CardNum" name="CardNum" value={CardNum} onChange={(e)=>{setInput(e)}} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="ExpDate">
                <Form.Label md={{ span: 2, offset: 3 }} column="sm" sm={2}>ExpDate</Form.Label>
                <Col sm={4}>
                    <Form.Control size="sm" type="text" placeholder="ExpDate" name="expDate" value={ExpDate} onChange={(e)=>{setInput(e)}} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="CVV">
                <Form.Label md={{ span: 2, offset: 3 }} column="sm" sm={2}>CVV</Form.Label>
                <Col sm={4}>
                    <Form.Control size="sm" type="text" placeholder="CVV" name="CVV" value={CVV} onChange={(e)=>{setInput(e)}} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="PasswordCard">
                <Form.Label md={{ span: 2, offset: 3 }} column="sm" sm={2}>PasswordCard</Form.Label>
                <Col sm={4}>
                    <Form.Control size="sm" type="text" placeholder="PasswordCard" name="PasswordCard" value={PasswordCard} onChange={(e)=>{setInput(e)}} />
                </Col>
            </Form.Group>
        </>
    );
}

export default BankAccounts;