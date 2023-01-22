import { Container, Nav, Navbar, Form, Button } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
import { CartWidget } from "../CartWidget/CartWidget"

// import "./NavBar.css"


const NavBar = () => {
    return (
        <>
            <Navbar className="navBar" bg="light" expand="lg">
                <Container>
                    <NavLink className="navBarBrand" to="/">Nauj Nitram</NavLink>
                    {/* <NavLink className={ ( { isActive } ) => isActive ? "bg-success" : "bg-dark"} to="/">Nauj Nitram</NavLink> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* <NavLink className={ ( { isActive } ) => isActive ? "btn btn-primary" : "btn btn-outline-light"} to="/hombre">Hombre</NavLink> */}
                            <Link to="/categoria/remeras">Remeras</Link>
                            <Link to="/categoria/pantalones">Pantalones</Link>
                            <Link to="/categoria/accesorios">Accesorios</Link>
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
                        <div>
                            <Link to="/cart">🛒</Link>
                        </div>
                        <CartWidget />  
                    </Navbar.Collapse>
                </Container>
            </Navbar>
                      
        </>
    )
  }

  export default NavBar