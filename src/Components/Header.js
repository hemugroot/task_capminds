import { Box, Typography } from "@mui/material";
import React from "react";

export const Header = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Typography
        variant="button"
        color="blue"
        sx={{ fontSize: 40, fontWeight: "bold" }}
      >
        CAPMINDS
      </Typography>
    </Box>
  );
};
