import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <AppBar component="nav" position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/">
          <IconButton
            sx={{
              color: "white",
            }}
          >
            <MenuIcon />
            <Typography variant="h6">Inicio</Typography>
          </IconButton>
        </Link>
        <Box>
          <Link to="/login">
            <IconButton>
              <Typography variant="h6" sx={{ color: "white" }}>
                Iniciar Sesión
              </Typography>
            </IconButton>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
