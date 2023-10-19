import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
export default function Header() {
  return (
    <AppBar component="nav">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton
          sx={{
            color: "white",
          }}
        >
          <MenuIcon />
          <Typography variant="h6">Tienda</Typography>
        </IconButton>
        <Box>
          <IconButton>
            <Typography variant="h6" sx={{ color: "white" }}>
              Iniciar Sesión
            </Typography>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
