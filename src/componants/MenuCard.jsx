import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import menu from "../api/Burger";
import menu2 from "../api/Pizza.js";

const MenuCard = () => {
  return (
    <>
      <Grid
        container
        sx={{ mt: 10, justifyContent: "space-between" }}
        spacing={3}
      >
        <Grid item xs={12}>
        <Typography variant="h2" align="center">Burger</Typography>
        </Grid>
      {
        menu.map((ele)=>{
          return (
            <Grid item>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={ele.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {ele.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
               {ele.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Rating {ele.rating}</Button>
              <Button size="small">Price {ele.price} </Button>
            </CardActions>
          </Card>
        </Grid>
          )
        })
      }
      </Grid>

      <Grid
        container
        sx={{ mt: 10, justifyContent: "space-between" }}
        spacing={3}
      >
        <Grid item xs={12}>
        <Typography variant="h2" align="center">Pizza</Typography>
        </Grid>
      {
        menu2.map((ele)=>{
          return (
            <Grid item>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={ele.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {ele.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
               {ele.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Rating {ele.rating}</Button>
              <Button size="small">Price {ele.price} </Button>
            </CardActions>
          </Card>
        </Grid>
          )
        })
      }
      </Grid>
    </>
  );
};
export default MenuCard;