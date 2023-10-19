import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
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
    <Paper sx={{ marginTop: 10 }}>
      <Grid container spacing={2}>
        {datos.map(({ id, title, category, image, description, price }) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={id}>
            <Card sx={{ margin: 2, padding: 2, height: "100%" }}>
              <CardHeader title={title} subheader={`Categoria: ${category}`} />
              <CardMedia component="img" src={image} alt={title} />
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  {description}
                </Typography>
                <Typography variant="h6" color="textPrimary">
                  {price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
