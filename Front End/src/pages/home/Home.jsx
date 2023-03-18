import "./Home.css";
import React from "react";
import { Typography, useTheme, Stack, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useGetproductsByNameQuery } from '../../Redux/productsApi'



const Home = () => {
  const theme = useTheme();
  const { data, error, isLoading } = useGetproductsByNameQuery()

  if(error){
    return(
      <Box>error...............</Box>
    )
  }
  if(isLoading){
    return(
      <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
    )
  }
  if(data){
    return (
      <Stack direction="row" sx={{ flexWrap: "wrap", justifyContent: "center" }}>
        {data.map((item) => {
          const {id,description,productName,imageLink,price} = item
          return (
            <Card key={id} sx={{ maxWidth: 277, mx: 2, mb: 6 }} className='productCard'>
              <CardMedia
                component="img"
                height="194"
                image={imageLink}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                 {description}
                </Typography>
              </CardContent>
              <CardActions
                sx={{ justifyContent: "space-between" }}
                disableSpacing
              >
                <Button
                  sx={{ textTransform: "capitalize", lineHeight: 1 }}
                  variant="contained"
                  color="primary"
                >
                  Add to Cart
                </Button>
                <Typography
                  sx={{ mr: 1 }}
                  variant="body1"
                  color={theme.palette.error.main}
                >
                  $ {price}
                </Typography>
              </CardActions>
            </Card>
          );
        })}
      </Stack>
    );
  
  }
  };

export default Home;
