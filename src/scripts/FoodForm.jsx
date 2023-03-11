import React from 'react';
import { FormContainer, Container, Input, Title, Error} from '../styles/StyledComponent';
import '../styles/styles.css';
import { useFormik } from 'formik';
import * as Yup from "yup";

const inputs = [
    { id: 1, label: "Nombre", placeholder: "Ingresa tu nombre: ", name: "name" },
    { id: 2, label: "Entrada", placeholder: "Ingresa tu entrada favorita: ", name: "entrada" },
    { id: 3, label: "Plato principal", placeholder: "Ingresa tu plato principal favorito: ", name: "principal" },
    { id: 4, label: "Postre", placeholder: "Ingresa tu postre favorito: ", name: "postre" }
]

const FoodForm = ({ handleFetchValues }) => {
  const getInitialValues = () => ({
    name: "",
    email: "",
    password: "",
    repeatpassword: ""
  });

  const getValidationSchema = () => (
    Yup.lazy(() =>
      Yup.object().shape({
        name: Yup.string()
          .min(3, 'Al menos debe ingresar tres caracteres')
          .max(20, 'Ha superado el maximo de 20 caracteres')
          .required("Por favor, chequea que la información sea correcta.❣️"),
        entrada: Yup.string()
          .min(6, 'La entrada debe tener al menos seis caracteres')
          .max(20, 'Ha superado el maximo de 20 caracteres')
          .required("Por favor, chequea que la información sea correcta.❣️"),
        principal: Yup.string()
          .min(6, 'El plato principal debe tener al menos seis caracteres')
          .max(20, 'Ha superado el maximo de 20 caracteres')
          .required("Por favor, chequea que la información sea correcta.❣️"),
        postre: Yup.string()
          .min(3, 'Al menos debe ingresar tres caracteres')
          .max(20, 'Ha superado el maximo de 20 caracteres')
          .required("Por favor, chequea que la información sea correcta.❣️"),
      })
    )
  )

  const onSubmit = (values) => {
    console.log(values);
    handleFetchValues(values);
  };

  const { values, setFieldValue, errors, handleSubmit } = useFormik({
    initialValues: getInitialValues(),
    validationSchema: getValidationSchema(),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit
  })

    return (
        <>
        <Title style={{textShadow: "5px 4px 3px whitesmoke"}}>COMIDA FAVORITA</Title>
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
                    onChange={(e) => setFieldValue(field.name, e.target.value)}
                  />
                  {
                    errors[field.name] && (
                      <Error>{errors[field.name]}</Error>
                    )
                  }
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