import { Button, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";

const TemplateDashboard = ({changeAction,generatePass,gPass,close}) => {

    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="animate__animated animate__fadeInDown">
            <Container>
                <Navbar.Brand onClick={()=>changeAction(0)} style={{cursor:"pointer"}} >PassWallet</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={()=>changeAction(1)} >New</Nav.Link>
                        <Nav.Link onClick={()=>changeAction(3)} >Setting</Nav.Link>
                        <Nav.Link onClick={()=>changeAction(4)} >About</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl type="text" placeholder="************" className="me-2" aria-label="Generate" size="sm" name="gPass" value={gPass} disabled />
                        <Button variant="outline-success" size="sm" onClick={generatePass}>Generate</Button>
                        <Button variant="danger" size="sm" style={{marginLeft: "0.5rem"}} onClick={close}>Close</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}

export default TemplateDashboard;