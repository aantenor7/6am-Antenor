import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav, NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
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
        <NavDropdown title="Estilos" id="basic-nav-dropdown">
          <NavDropdown.Item ><Link to='/Estilos/BlackAndWhite'>Black and White</Link> </NavDropdown.Item>
          <NavDropdown.Item ><Link to='/Estilos/Color'>Color</Link></NavDropdown.Item>
        </NavDropdown>
        <Nav.Link> <Link to="/Contact">Contacto</Link></Nav.Link>
        
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-light" type="submit">Search</Button>
      </Form>
      <Nav className="nav justify-content-end">
        <Nav.Link ><Link to='/Carrito'><CartWidge/></Link></Nav.Link>
        </Nav>
          
      </Container>
      
    </Navbar>
  </>   
  );
}

export default NavBar;
