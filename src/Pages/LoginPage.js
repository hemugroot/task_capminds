import {
  Box,
  Button,
  Card,
  CssBaseline,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Header } from "../Components/Header";
import { useData } from "../Context/DataProvider";

export const LoginPage = () => {
  const { login } = useData();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleUser = (event) => {
    setEmail(event.target.value);
  };

  const handlePass = (event) => {
    setPass(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    login({ email, pass, history });
  };

  return (
    <div style={{ backgroundColor: "#d2fcf5", height: "100vh" }}>
      <CssBaseline />
      <Box>
        <Header />
        <Box sx={{ margin: "auto" }} width={450} padding={1}>
          <Card>
            <Box height={350} width={450} padding={1}>
              <Box justifyContent="center" display="flex" padding={2}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Log in to Capminds
                </Typography>
              </Box>
              <Divider />
              <Box padding={2} onSubmit={handleLogin} component="form">
                <Box padding={0.5} />
                <Stack spacing={2}>
                  <TextField
                    size="small"
                    placeholder="Email address"
                    value={email}
                    onChange={handleUser}
                    // error={email === "" ? true : false}
                    required
                    helperText="use email : hemu793@gmail.com"
                  />
                  <TextField
                    size="small"
                    placeholder="Password"
                    value={pass}
                    onChange={handlePass}
                    helperText="Password : Pass@123"
                    // error={pass === "" ? true : false}
                    required
                  />
                  <Button variant="contained" color="primary" type="onSubmit">
                    Login
                  </Button>
                </Stack>
              </Box>
              <Stack direction="row" justifyContent="center">
                {/* <Typography color="blue" sx={{ fontWeight: "500" }}>
                  Forgotten account?
                </Typography> */}
                <NavLink to="signup">
                  <Typography color="blue" sx={{ fontWeight: "500" }}>
                    Sign up for Facebook?
                  </Typography>
                </NavLink>
              </Stack>
            </Box>
          </Card>
        </Box>
      </Box>
    </div>
  );
};
