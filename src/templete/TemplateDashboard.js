import { Container, Nav, Navbar } from "react-bootstrap";

const TemplateDashboard = ({changeAction}) => {

    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand onClick={()=>changeAction(0)} style={{cursor:"pointer"}} >PassWallet</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={()=>changeAction(1)} >New</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}

export default TemplateDashboard;