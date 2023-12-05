import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Detalle from "./Detalle";
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
    <Paper
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 17rem), 1fr))",
        gap: "10px",
        padding: "15px",
      }}
    >
      {datos.map(({ id, title, category, image, description, price }) => (
        <Card
          key={id}
          sx={{
            margin: 1,
            padding: 2,
            height: "31rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <CardMedia
            component="img"
            src={image}
            alt={title}
            sx={{
              borderRadius: "10px",
              height: "100%",
              maxHeight: "11rem",
              objectFit: "contain",
            }}
          />
          <Typography variant="h6">{title}</Typography>
          <CardContent>
            <Detalle
              title={title}
              description={description}
              category={category}
              price={price}
            />
          </CardContent>
        </Card>
      ))}
    </Paper>
  );
}
