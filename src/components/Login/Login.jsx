import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { Field, Formik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Login() {
  const [error, setError] = useState("");

  const handleLogin = async (values) => {
    try {
      const response = await axios.post("https://fakestoreapi.com/auth/login", {
        username: values.usuario,
        password: values.contrasena,
      });
      console.log("inicio de sesión exitoso: ", response.data);
    } catch (error) {
      console.error("error al iniciar sesión: ", error.response.data);
      setError(error.response.data.message || "error al autenticar");
    }
  };

  return (
    <Contenedor>
      <Formik
        initialValues={{
          usuario: "",
          contrasena: "",
        }}
        validate={(valores) => {
          let errores = {};
          //validar usuario
          if (!valores.usuario) {
            errores.usuario = "ingresa un nombre de usuario";
          }
          //validar contraseña
          if (!valores.contrasena) {
            errores.contrasena = "Ingrese una contraseña por favor";
          }
          return errores;
        }}
        onSubmit={(values) => {
          handleLogin(values);
        }}
      >
        <Formulario component="form">
          <Typography variant="h5" align="center" color="primary">
            Iniciar
          </Typography>
          <Field
            as={TextField}
            name="usuario"
            label="Usuario"
            error={!!error}
            helperText={error}
          />
          <Field
            as={TextField}
            type="password"
            name="contrasena"
            label="Contraseña"
            error={!!error}
            helperText={error}
          />
          <Button
            variant="contained"
            onClick={() => {
              handleLogin();
            }}
          >
            Iniciar Sesión
          </Button>
          <Typography>
            No tienes cuenta. <Link to="/create">Crear una</Link>
          </Typography>
        </Formulario>
      </Formik>
    </Contenedor>
  );
}

const Contenedor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Formulario = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 30%;
  gap: 15px;
  @media (max-width: 700px) {
    width: 80%;
  }
`;
