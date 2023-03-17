import { Box, Paper, Button, styled, IconButton, Badge, Typography, Divider, Stack } from "@mui/material";
import "./Cart.css";
import React from "react";
import { Add, Delete, Remove, TramSharp } from "@mui/icons-material";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#1976d2",
    color: "white",
  },
}));
export default function MyCart() {
  return (
    <Box>
      <Paper dir="rtl" className="item-container">
        <div className="img-title-parent">
          <img src="###" alt="" />
          <p className="product-name">t-shirt</p>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton sx={{ color: "#1976d2" }}>
            <Add />
          </IconButton>
          <StyledBadge badgeContent={1} color="secondary" />
          <IconButton sx={{ color: "#1976d2" }}>
            <Remove />
          </IconButton>
        </div>

        <div className="price">$1000</div>
        {}
        <Button
          sx={{ display: { xs: "none", md: "inline-flex" } }}
          variant="contained"
          className="btn btn-secondary"
        >
          حذف
        </Button>
        <IconButton sx={{ display: { xs: "inline-flex", md: "none" } }}>
          <Delete color="error" />
        </IconButton>
      </Paper>
      <Paper sx={{width:"50%",mx:"auto"}}>
        <Typography sx={{py:2,textAlign:"center"}} variant="h5" >card summery</Typography>
        <Divider/>
        <Stack direction='row' sx={{justifyContent:"space-between",py:2,px:1}}>
          <Typography variant="body1">subTotal</Typography>
          <Typography variant="body1">$1000</Typography>
        </Stack>
        <Button fullWidth variant="contained">checkout</Button>
      </Paper>
    </Box>
  );
}
