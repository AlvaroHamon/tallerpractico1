import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import { styled } from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";

export default function Crear() {
  const [sendForm, setSendForm] = useState(false);
  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          apellido: "",
          correo: "",
          contrasena: "",
          confiContrasena: "",
          genero: "",
        }}
        onSubmit={(valores) => {
          console.log(valores);
          console.log("Formulario enviado");
          if (
            valores.nombre &&
            valores.apellido &&
            valores.correo &&
            valores.contrasena &&
            valores.genero
          ) {
            console.log("formulario enviado");
            setSendForm(true);
          }
        }}
        validate={(valor) => {
          let errores = {};
          //validar nombre
          if (!valor.nombre) {
            errores.nombre = "Por favor ingrese un nombre";
          } else if (!/^[A-Za-z\s]{4,40}$/.test(valor.nombre)) {
            errores.nombre = "El nombre solo puede contener letras y espacios";
          }
          //validar apellido
          if (!valor.apellido) {
            errores.apellido = "Por favor ingrese un apellido";
          } else if (!/^[A-Za-z\s]{4,40}$/.test(valor.apellido)) {
            errores.apellido =
              "El apellido solo puede contener letras y espacios";
          }
          //validar correo
          if (!valor.correo) {
            errores.correo = "Por favor ingrese un correo electrónico";
          } else if (
            !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
              valor.correo
            )
          ) {
            errores.correo =
              "El correo electrónico, no esta en el formato correcto";
          }
          //validación contraseña
          if (!valor.contrasena) {
            errores.contrasena = "Por favor ingrese una contraseña";
          } else if (
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,30}$/.test(
              valor.contrasena
            )
          ) {
            errores.contrasena =
              "La contraseña debe tener entre 8 y 30 caracteres y contener al menos 1 minúscula, 1 mayúscula y 1 número";
          }

          if (!valor.confiContrasena) {
            errores.confiContrasena = "Por favor ingrese una contraseña";
          } else if (
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,30}$/.test(
              valor.confiContrasena
            )
          ) {
            errores.confiContrasena =
              "La contraseña debe tener entre 8 y 30 caracteres y contener al menos 1 minúscula, 1 mayúscula y 1 número";
          }

          if (valor.contrasena != valor.confiContrasena) {
            errores.confiContrasena = "Las contraseñas no coinciden";
          }
          return errores;
        }}
      >
        {({
          handleSubmit,
          values,
          errors,
          handleChange,
          handleBlur,
          touched,
        }) => (
          <Contenedor>
            <Formulario component="form" onSubmit={handleSubmit}>
              <Typography variant="h4" align="center" color="primary">
                Crear Cuenta
              </Typography>
              <TextField
                type="text"
                label="Nombre"
                name="nombre"
                fullWidth
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.nombre && errors.nombre ? true : false}
                helperText={
                  touched.nombre && errors.nombre ? errors.nombre : null
                }
              />
              <TextField
                type="text"
                label="Apellido"
                name="apellido"
                fullWidth
                value={values.apellido}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.apellido && errors.apellido ? true : false}
                helperText={
                  touched.apellido && errors.apellido ? errors.apellido : null
                }
              />
              <TextField
                type="text"
                label="Correo electrónico"
                name="correo"
                fullWidth
                value={values.correo}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.correo && errors.correo ? true : false}
                helperText={
                  touched.correo && errors.correo ? errors.correo : null
                }
              />
              <TextField
                type="password"
                label="Contraseña"
                name="contrasena"
                value={values.contrasena}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.contrasena && errors.contrasena ? true : false}
                helperText={
                  touched.contrasena & errors.contrasena
                    ? errors.contrasena
                    : null
                }
                fullWidth
              />
              <TextField
                type="password"
                label="Confirme su contraseña"
                name="confiContrasena"
                value={values.confiContrasena}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.confiContrasena && errors.confiContrasena
                    ? true
                    : false
                }
                helperText={
                  touched.confiContrasena && errors.confiContrasena
                    ? errors.confiContrasena
                    : null
                }
                fullWidth
              />
              <FormControl>
                <FormLabel>Genero</FormLabel>
                <RadioGroup
                  sx={{ display: "flex", flexDirection: "row" }}
                  name="genero"
                  value={values.genero}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="hombre"
                    control={<Radio />}
                    label="Hombre"
                  ></FormControlLabel>
                  <FormControlLabel
                    value="mujer"
                    control={<Radio />}
                    label="Mujer"
                  ></FormControlLabel>
                  <FormControlLabel
                    value="otro"
                    control={<Radio />}
                    label="Otro"
                  ></FormControlLabel>
                </RadioGroup>
              </FormControl>
              <Button variant="contained" type="submit">
                Registrar
              </Button>
              {sendForm && (
                <Typography bgcolor="lightgreen" textAlign="center">
                  Usuario creado con éxito
                </Typography>
              )}
            </Formulario>
          </Contenedor>
        )}
      </Formik>
    </>
  );
}

const Contenedor = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Formulario = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 15px;
  @media (max-width: 700px) {
    width: 90%;
  }
`;
