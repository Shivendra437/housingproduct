import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
// import {Grid} from "@mui/material";
export default function Room(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.names}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Type: {props.type}
            <br />
            Price:{props.price}
            <br />
            Rating: {props.rating}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
