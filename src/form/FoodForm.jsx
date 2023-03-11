import React, { useState } from 'react';
import { FormContainer, Container, Input} from '../styles/StyledComponent';
import '../styles/styles.css';

const inputs = [
    { id: 1, label: "Nombre", placeholder: "Ingresa tu nombre: ", name: "name" },
    { id: 2, label: "Entrada", placeholder: "Ingresa tu entrada favorita: ", name: "entrada" },
    { id: 3, label: "Plato principal", placeholder: "Ingresa tu plato principal favorito: ", name: "principal" },
    { id: 4, label: "Postre", placeholder: "Ingresa tu postre favorito: ", name: "postre" }
]

const FoodForm = () => {

    const[values, setValues] = useState({
      name:"",
      entrada:"",
      principal:"",
      postre:""
    });
  
    const handleChange = (e) => {
      const key = e.target.name;
      const value = e.target.value;
      setValues({ ...values, [key]: value }); 
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("FOOD:", values);
      setValues({
        name:"",
        entrada:"",
        principal:"",
        postre:""
      })
    }

    return (
        <>
        <h1>COMIDA FAVORITA</h1>
        <FormContainer from="food">
            <form id="food-form" onSubmit={handleSubmit}>
            {
                inputs.map(field => (
                <Container key={field.id}>
                <label>{field.label}</label>
                <Input
                    name={field.name}
                    placeholder={field.placeholder}
                    value={values[field.name]}
                    onChange={handleChange}
                />
                </Container>
                ))
            }
            </form>
            <Container content="row">
                <button form="food-form" btn="submit" type="submit">😋</button>
            </Container>
        </FormContainer>
        </>
    )
}

export default FoodForm;