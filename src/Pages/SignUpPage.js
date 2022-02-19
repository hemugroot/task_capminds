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
import { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Header } from "../Components/Header";
import { useData } from "../Context/DataProvider";

export const SignUpPage = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [initial, setInitial] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [check, setCheck] = useState(false);

  const { SignUp, setUser } = useData();

  const handleSumbit = (event) => {
    event.preventDefault();
    const fullName = name + " " + initial;
    if (name !== "" && mail !== "" && password !== "" && confirm !== "") {
      SignUp({ fullName, mail, password, history });
    }
  };

  return (
    <div style={{ backgroundColor: "#d2fcf5", height: "100vh" }}>
      <CssBaseline />
      <Box>
        <Header />
        <Box
          sx={{ margin: "auto" }}
          width={450}
          padding={1}
          component="form"
          onSubmit={handleSumbit}
        >
          <Card>
            <Box height={450} width={450} padding={1}>
              <Box justifyContent="center" display="flex">
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Create a new account
                </Typography>
              </Box>
              <Box justifyContent="center" display="flex">
                <Typography>It's quick and easy.</Typography>
              </Box>
              <Divider />
              <Box padding={2}>
                <Stack
                  spacing={2}
                  direction="row"
                  justifyContent={"space-between"}
                  marginBottom={2}
                >
                  <TextField
                    size="small"
                    placeholder="Your Name"
                    value={name}
                    required
                    onChange={(value) => {
                      setName(value.target.value);
                    }}
                  />
                  <TextField
                    size="small"
                    placeholder="Initial"
                    value={initial}
                    required
                    onChange={(value) => {
                      setInitial(value.target.value);
                    }}
                  />
                </Stack>
                <Stack spacing={2}>
                  <TextField
                    size="small"
                    placeholder="Email address"
                    value={mail}
                    required
                    onChange={(value) => {
                      setMail(value.target.value);
                    }}
                  />
                  <TextField
                    size="small"
                    placeholder="Password"
                    value={password}
                    required
                    onChange={(value) => {
                      setPassword(value.target.value);
                    }}
                  />
                  <TextField
                    size="small"
                    placeholder="Confirm Password"
                    value={confirm}
                    required
                    onChange={(value) => {
                      setConfirm(value.target.value);
                      if (password === value.target.value) {
                        setCheck(false);
                      } else {
                        setCheck(true);
                      }
                    }}
                  />
                  {check && (
                    <Typography color="red">
                      Password chouldn't match
                    </Typography>
                  )}
                </Stack>
                <Box padding={0.5} />
              </Box>
              <Stack
                // direction="row"
                // spacing={1}
                // justifyContent="space-between"
                paddingLeft={2}
                paddingRight={3}
              >
                <Button variant="contained" color="success" type="submit">
                  SignUp
                </Button>
                {/* <MyButton label="Login" color="primary" /> */}
              </Stack>
              <Box
                marginTop={2}
                display="flex"
                flexDirection="row"
                justifyContent="center"
              >
                <NavLink to="/">
                  <Typography
                    justifySelf={"center"}
                    color="blue"
                    sx={{ fontWeight: "bold" }}
                  >
                    Already have an account?
                  </Typography>
                </NavLink>
              </Box>
            </Box>
          </Card>
        </Box>
      </Box>
    </div>
  );
};
