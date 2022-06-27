import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { sumar,restar,reset } from "../components/Actions/contadorActions";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./card.css";


 const Contador = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  
  return (
    <div style={{ textAlign: "center" }}>
      <Card.Text>
        <Button variant="primary" onClick={()=>dispatch(restar())}>
          - 
        </Button>
        <Button type="button" class="btn btn light btn-lg" onClick={()=>dispatch(reset())}>
          {state.contador}
        </Button>
        <Button variant="primary" onClick={()=>dispatch(sumar())}>
          +
        </Button>
      </Card.Text>
    </div>
  );
};
export default Contador;