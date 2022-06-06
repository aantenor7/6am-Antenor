import NavBar from './components/Navbar/NavBar';
import 'bootstrap';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'; 
import Home from "./Views/Home/Home";
import Color from "./Views/Color/Color";
import BlackAndWhite from "./Views/B&W/B&W";
import Contact from "./Views/Contact/Contact";
import Detail from "./Views/Detail/Detail";
import Carrito from "./Views/Carrito/Carrito";
import Estilos from "./Views/Estilos/Estilos";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
    <div className="App">
      
      <NavBar> </NavBar>
      
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/Estilos/:style' element={<BlackAndWhite></BlackAndWhite>}/>
        <Route path='/Estilos/:style' element={<Color></Color>}/>
        <Route path='/Estilos/:style' element={<Estilos></Estilos>}/>
        <Route path='/Contact' element={<Contact></Contact>} />
        <Route path='/Detail/:id' element={<Detail></Detail>}/>
        <Route path='/Carrito' element={<Carrito></Carrito>}/>
      </Routes>
       
          </div>
          </Router>
  );
};

export default App;
