import NavBar from './components/Navbar/NavBar';
import 'bootstrap';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'; 
import Home from "./Views/Home/Home";
import Men from "./Views/Men/Men";
import Contact from "./Views/Contact/Contact";
import Detail from "./Views/Detail/Detail";
import Carrito from "./Views/Carrito/Carrito"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
    <div className="App">
      
      <NavBar> </NavBar>
      
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/Men' element={<Men></Men>} />
        <Route path='/Contact' element={<Contact></Contact>} />
        <Route path='/Detail/:id' element={<Detail></Detail>}/>
        <Route path='/Carrito' element={<Carrito></Carrito>}/>
      </Routes>
       
          </div>
          </Router>
  );
};

export default App;
