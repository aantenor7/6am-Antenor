import { combineReducers } from "redux";
import { carritoReducer } from '../Reducers/carritoReducer';
import contadorReducer from '../Reducers/contadorReducer';

const reducer = combineReducers({
    contador: contadorReducer,
    carrito: carritoReducer,
  
});

export default reducer;
