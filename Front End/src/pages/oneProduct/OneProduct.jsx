import { Remove, Add } from "@mui/icons-material";
import {
  useTheme,
  Badge,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import {
  productsApi,
  useGetproductsByNameQuery,
} from "../../Redux/productsApi";
import React from "react";
import { useParams } from "react-router-dom";
import { decreaseQuantity, increaseQuantity, addToCart } from "Redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#1976d2",
    color: "white",
  },
}));

export default function OneProduct() {
  const { data, error, isLoading } = useGetproductsByNameQuery();
  const theme = useTheme();
  let { productId } = useParams();
  const { selectedProducts } = useSelector(
    // @ts-ignore
    (state) => state.carttt
  );
  const dispatch = useDispatch();
  const productQuantity = (id) => {
    const myProduct = selectedProducts.find((product) => {
      return product.id === id;
    });
    return myProduct.Quantity;
  };
  if (error) {
    return <Box>error...............</Box>;
  }
  if (isLoading) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }
  if (data) {
    const product = data.find((item) => item.id === Number(productId));
    return (
      <Box>
        <Card sx={{ maxWidth: 277, mx: 2, mb: 6 }} className="productCard">
          <CardMedia
            component="img"
            height="194"
            image={product.imageLink}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "space-between" }} disableSpacing>
            {/* {selectedProductsID.includes(id) ? */}

            {selectedProducts.find((item) => item.id === product.id) ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  onClick={() => {
                    dispatch(decreaseQuantity(product));
                  }}
                  sx={{ color: "#1976d2" }}
                >
                  <Remove />
                </IconButton>
                <StyledBadge
                  badgeContent={productQuantity(product.id)}
                  color="secondary"
                />
                <IconButton
                  onClick={() => {
                    dispatch(increaseQuantity(product));
                  }}
                  sx={{ color: "#1976d2" }}
                >
                  <Add />
                </IconButton>
              </div>
            ) : (
              <Button
                onClick={() => {
                  dispatch(addToCart(product));
                }}
                sx={{
                  textTransform: "capitalize",
                  lineHeight: 1,
                }}
                variant="contained"
                color="primary"
              >
                Add to Cart
              </Button>
            )}

            <Typography
              sx={{ mr: 1 }}
              variant="body1"
              color={theme.palette.error.main}
            >
              $ {Number(product.price)}
            </Typography>
          </CardActions>
        </Card>
      </Box>
    );
  }
}
