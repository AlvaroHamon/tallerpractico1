import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Productos() {
  const URL_BASE = "https://fakestoreapi.com/";
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const data = async () => {
      try {
        const respose = await axios.get(URL_BASE + "products");
        setDatos(respose.data);
      } catch (error) {
        console.error(error);
      }
    };
    data();
  }, []);

  return (
    <Paper>
      <Grid container spacing={2}>
        {datos.map(({ id, title, category, image, description, price }) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
            <Card sx={{ margin: 8, padding: 5, height: "100%" }}>
              <CardHeader title={title} subheader={`Category: ${category}`} />
              <CardMedia component="img" src={image} alt={title} height="250" />
              <CardContent>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    {" "}
                    <Typography variant="h6">Description</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" color="textSecondary">
                      {description}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Typography variant="h6" color="textPrimary">
                  Price: {price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
