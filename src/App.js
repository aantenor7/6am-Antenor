import NavBar from './components/Navbar/NavBar';
import 'bootstrap';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'; 
import Home from "./Views/Home/Home";
import Color from "./Views/Color/Color";
import BlackAndWhite from "./Views/BlackAndWhite/BlackAndWhite";
import Contact from "./Views/Contact/Contact";
import Detail from "./Views/Detail/Detail";
import Carrito from "./Views/Carrito/Carrito";
import Serie from "./Views/Serie/Serie";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
    <div className="App">
      
      <NavBar> </NavBar>
      
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/BlackAndWhite' element={<BlackAndWhite></BlackAndWhite>}/>
        <Route path='/Color' element={<Color></Color>}/>
        <Route path='/Serie/:category' element={<Serie></Serie>}/>
        <Route path='/Contact' element={<Contact></Contact>} />
        <Route path='/Detail/:id' element={<Detail></Detail>}/>
        <Route path='/Carrito' element={<Carrito></Carrito>}/>
      </Routes>
       
          </div>
          </Router>
  );
};

export default App;
