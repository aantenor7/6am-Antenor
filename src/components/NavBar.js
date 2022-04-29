import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import  swal  from 'sweetalert';
import 'bootstrap/dist/css/bootstrap.min.css';
<>
  
</>
const pulsar = ()=> {
  swal("Esta Seccion Se Encuentra en Construcción");
}


function NavBar() {
  return (
    
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#6am" onClick={()=>{pulsar()}}>6am</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home" onClick={()=>{pulsar()}}>Home</Nav.Link>
        <Nav.Link href="#Productos" onClick={()=>{pulsar()}} >Productos</Nav.Link>
        <Nav.Link href="#Fotos" onClick={()=>{pulsar()}}>Fotos</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
  </>
   
  
    


    
  );
}

export default NavBar;
