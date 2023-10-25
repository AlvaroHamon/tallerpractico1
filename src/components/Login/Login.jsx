import { Box, Button, TextField, Typography } from "@mui/material";
import { Field, Formik } from "formik";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Login() {
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
      >
        {({ handleSubmit, errors }) => (
          <Formulario component="form" onSubmit={handleSubmit}>
            <Typography variant="h5" align="center" color="primary">
              Iniciar Sesión
            </Typography>
            <Field
              as={TextField}
              name="usuario"
              label="Usuario"
              error={errors.usuario ? true : false}
              helperText={errors.usuario ? errors.usuario : null}
            />
            <Field
              as={TextField}
              type="password"
              name="contrasena"
              label="Contraseña"
              error={errors.contrasena ? true : false}
              helperText={errors.contrasena ? errors.contrasena : null}
            />
            <Button type="submit" variant="contained">
              Iniciar Sesión
            </Button>
            <Typography>
              No tienes cuenta. <Link to="/create">Crear una</Link>
            </Typography>
          </Formulario>
        )}
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
