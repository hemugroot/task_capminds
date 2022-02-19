import { Box, Button } from "@mui/material";
import React from "react";

export const MyButton = ({ label, color }) => {
  return (
    <Box width="20ch">
      <Button variant="contained" color={color} fullWidth>
        {label}
      </Button>
    </Box>
  );
};
