import { combineReducers } from "redux";
import {carritoReducer} from '../Reducers/carritoReducer';
import {contadorReducer} from '../Reducers/contadorReducer';

const reducer = combineReducers({
    
    cart: carritoReducer,
});

export default reducer;
