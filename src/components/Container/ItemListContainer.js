import React from "react";
import { ListGroup } from "react-bootstrap";
const ItemLIstContainer = (prop) =>
{
  return (
    <>
    <ListGroup as="ul">
    <ListGroup.Item as="li" active>{prop.nombreArticulo}  </ListGroup.Item>
  </ListGroup>
  </>
  );      
};

export default ItemLIstContainer; 