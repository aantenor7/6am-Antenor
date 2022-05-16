import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidge from './CartWidge'
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    
    <>

    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><Link to='/'> 
             <img src="./logo6am.jpg" width="70" height="55" alt="logo"/>
             </Link>
          </Navbar.Brand>
     
      <Nav className="me-auto">
        <Nav.Link><Link to="/">Home</Link></Nav.Link>
        <NavDropdown title="Productos" id="basic-nav-dropdown">
          <NavDropdown.Item ><Link to='/Men'>Men</Link> </NavDropdown.Item>
          <NavDropdown.Item ><Link to='/Woman'>Woman</Link></NavDropdown.Item>
          <NavDropdown.Item ><Link to='/Kids'>Kids</Link></NavDropdown.Item>
        </NavDropdown>
        <Nav.Link> <Link to="/Contact">Contacto</Link></Nav.Link>
        
      </Nav>
      <Nav className="nav justify-content-end">
        <Nav.Link ><Link to='/Carrito'><CartWidge/></Link></Nav.Link>
        </Nav>
          
      </Container>
      
    </Navbar>
  </>   
  );
}

export default NavBar;
