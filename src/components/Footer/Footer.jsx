import { AppBar, Container, Toolbar, Typography, styled } from "@mui/material";
export default function Footer() {
  const FooterStyle = styled(AppBar)`
    top: auto;
    bottom: 0;
  `;
  return (
    <FooterStyle component="footer">
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
    </FooterStyle>
    // <Paper component="footer" sx={{ bottom: 0 }}>
    //   <IconButton sx={{ color: "white" }}>
    //     <MenuIcon />
    //   </IconButton>
    //   <Typography variant="h5" sx={{ flexGrow: 1 }}>
    //     Desarrolado por: Alvaro Hamon
    //   </Typography>
    //   <Box>
    //     <IconButton>
    //       <Typography variant="h5" sx={{ color: "white" }}>
    //         Iniciar Sesion
    //       </Typography>
    //     </IconButton>
    //   </Box>
    // </Paper>
  );
}
