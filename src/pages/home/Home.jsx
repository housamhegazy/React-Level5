import { Box } from "@mui/system";
import "./Home.css";
import React from "react";
import { Typography, useTheme, IconButton, Stack, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { useTheme } from "@emotion/react";
const recivedDatafromApi = [{}, {}, {}, {}];
const Home = () => {
  const theme = useTheme();
  return (
    <Stack direction="row" sx={{ flexWrap: "wrap",justifyContent:'center' }}>
      {recivedDatafromApi.map((item) => {
        return (
          <Card sx={{ maxWidth: 277, mx: 2, mb: 6 }}>
            <CardMedia
              component="img"
              height="194"
              image="/static/images/cards/paella.jpg"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with
              </Typography>
            </CardContent>
            <CardActions
              sx={{ justifyContent: "space-between" }}
              disableSpacing
            >
              <Button
                sx={{ textTransform: "capitalize",lineHeight:1 }}
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
                $ 100
              </Typography>
            </CardActions>
          </Card>
        );
      })}
    </Stack>
  );
};

export default Home;
