import {
  Container,
  Nav,
  Navbar as BtNavbar,
  Form,
  Button,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";

import "./NavBar.css";

const NavBarComponente = () => {
  return (
    <BtNavbar className="navBar" bg="light" expand="lg">
      <Container className="navBarContainer">
        <NavLink className="navBarBrand" to="/">
          Adidas
        </NavLink>
        {/* <NavLink className={ ( { isActive } ) => isActive ? "bg-success" : "bg-dark"} to="/">Nauj Nitram</NavLink> */}
        <BtNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BtNavbar.Collapse id="basic-navbar-nav" className="NavContainer">
          <Nav className="me-auto NavLinkContainer">
            <NavLink
              className={({ isActive }) =>
                isActive ? "navBotonActive" : "navBotonInactive"
              }
              to="/categoria/remeras"
            >
              Remeras
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "navBotonActive" : "navBotonInactive"
              }
              to="/categoria/pantalones"
            >
              Pantalones
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "navBotonActive" : "navBotonInactive"
              }
              to="/categoria/accesorios"
            >
              Accesorios
            </NavLink>
            {/* <Link to="/categoria/remeras" className="NavLink">Remeras</Link>
                            <Link to="/categoria/pantalones" className="NavLink">Pantalones</Link>
                            <Link to="/categoria/accesorios" className="NavLink">Accesorios</Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-secondary">Buscar</Button>
          </Form>
          <div className="btn btn-outline-secondary cartIcon">
            <Link to="/cart" className="carrito">
              <CartWidget /> 🛒
            </Link>
          </div>
        </BtNavbar.Collapse>
      </Container>
    </BtNavbar>
  );
};

export default NavBarComponente;
