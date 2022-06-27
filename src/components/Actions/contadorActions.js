import {INCREMENT,DECREMENT,RESET} from "../../types";

export const sumar = () => ({type: INCREMENT});
export const restar = () => ({type: DECREMENT});
export const reset = () => ({type: RESET});