import React from "react";
import { Box, Divider, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box margin={"2rem auto"}>
      <Typography variant='h4' align='center' mb={2}>
        Post App
      </Typography>
      <Divider
        sx={{ width: "50%", margin: "0 auto", backgroundColor: "black" }}
      />
    </Box>
  );
};

export default Header;
