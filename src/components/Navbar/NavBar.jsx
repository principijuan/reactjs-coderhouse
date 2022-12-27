import { Container, Nav, Navbar, Form, Button } from "react-bootstrap"
import { CartWidget } from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Nauj Nitram</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Hombre</Nav.Link>
                            <Nav.Link href="#home">Mujer</Nav.Link>
                            <Nav.Link href="#home">Niños</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Buscar..."
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Buscar</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
                <CartWidget />  
            </Navbar>
                      
        </>
    )
  }

  export default NavBar