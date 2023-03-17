import {
  Box,
  Button,
  InputAdornment,
  Stack,
  TextField,
  styled,
  Typography,
  ButtonGroup,
  IconButton,
} from "@mui/material";
import "./Cart.css";
import React from "react";
import { purple } from "@mui/material/colors";
import { ChevronRight } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import MailIcon from "@mui/icons-material/Mail";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  // @ts-ignore
  backgroundColor: theme.palette.ali.main,
  "&:hover": {
    // @ts-ignore
    backgroundColor: theme.palette.ali.main,
    scale: "0.99",
  },
}));

export default function MyCart() {
  const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };
  return (
    <Stack>
      <Box sx={{ border: "2px solid red" }}>
        <Button variant="text" color="error">
          Delete
        </Button>
        <Typography>$ 100</Typography>
        <Box
          sx={{
            color: "action.active",
            display: "flex",
            flexDirection: "column",
            "& > *": {
              marginBottom: 2,
            },
            "& .MuiBadge-root": {
              marginRight: 4,
            },
          }}
        >
          <div>
            <ButtonGroup>
              <Button
                aria-label="reduce"
                onClick={() => {
                  setCount(Math.max(count - 1, 0));
                }}
              >
                <RemoveIcon fontSize="small" />
              </Button>
              <Box>
                <Badge
                  sx={{ position: "relative" }}
                  color="secondary"
                  badgeContent={count}
                ></Badge>
              </Box>
              <Button
                aria-label="increase"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                <AddIcon fontSize="small" />
              </Button>
            </ButtonGroup>
          </div>
        </Box>
      </Box>
    </Stack>
  );
}
