import { Box, IconButton, InputAdornment, OutlinedInput } from "@mui/material";

export const MyTextbox = ({ value, label }) => {
  return (
    <Box sx={{ padding: 1 }}>
      <OutlinedInput
        margin="normal"
        size="small"
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" edge="end">
              {/* {values.showPassword ? <InfoIcon /> : <InfoIcon />} */}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </Box>
  );
};
