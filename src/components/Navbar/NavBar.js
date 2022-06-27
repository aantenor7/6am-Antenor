import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CartWidge from "./CartWidge";
import { Link } from "react-router-dom";
import "./NavBar.css";
import {  useSelector } from "react-redux";

function NavBar() {
  const state = useSelector(state => state);
  
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src="./logo6am.jpg" width="70" height="55" alt="logo" />
            </Link>
          </Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <NavDropdown title="Estilos" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link className="navbar" to="/Estilos/BlackAndWhite">
                  Black and White
                </Link>{" "}
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/Estilos/Color">Color</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              {" "}
              <Link to="/Contact">Contacto</Link>
            </Nav.Link>
          </Nav>
          
          <Nav className="nav justify-content-end">
            <Nav.Link>
              <Link to="/Carrito">
                
                <CartWidge  /> 
                <h5>{state.carrito.cart.length} </h5>
                
                
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
