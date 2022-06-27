import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { db } from "../../Firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const initialState = {
  name: "",
  lastName: "",
  email: "",
  address: "",
};

const Formulario = () => {
  const [values, setValues] = useState(initialState);
  const handleOnChange = (e) => {
    const { value, name } = e.target;

    setValues({ ...values, [name]: value });
  };
  
  const alertBuy = () => {
     alert("Gracias por su compra");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "purcharses"), {
      values,
    });
    console.log('Document written successfully id:',docRef.id);
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="name"
            placeholder="Ingrese su nombre"
            name="name"
            value={values.name}
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="lastName"
            placeholder="Ingrese su apellido"
            name="lastName"
            value={values.lastName}
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su email"
            name="email"
            value={values.email}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Direccion</Form.Label>
          <Form.Control
            type="address"
            placeholder="Ingrese su Direccion"
            name="address"
            value={values.address}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Button onClick={alertBuy} variant="primary" type="submit">
          ChekOut
        </Button>
      </Form>
    </div>
  );
};

export default Formulario;
