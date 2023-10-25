import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Login() {
  return (
    <Contenedor>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 3, width: "25%" }}
      >
        <Typography variant="h5" align="center" color="primary">
          Iniciar Sesión
        </Typography>
        <TextField label="Username" required fullWidth />
        <TextField
          type="password"
          label="Password"
          required
          error={false}
          helperText="Error con la contrasena"
        />
        <Button type="submit" variant="contained">
          Iniciar Sesión
        </Button>
        <Typography>
          No tienes cuenta. <Link to="/create">Crear una</Link>
        </Typography>
      </Box>
    </Contenedor>
  );
}

const Contenedor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
