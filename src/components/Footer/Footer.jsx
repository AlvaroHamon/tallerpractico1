import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <AppBar component="footer" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar>
        <Container
          maxWidth="xl"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Typography color="inherit" variant="body1">
            Desarrollado por: Alvaro Hamon
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
