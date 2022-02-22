import { Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useData } from "../Context/DataProvider";

const HomePage = () => {
  const { user, setUser } = useData();
  const history = useHistory();

  const handleClick = () => {
    setUser("");
    history.push("/");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginRight: 10,
      }}
    >
      <h1>Welcome {user}!</h1>
      <Box>
        <Button
          size="small"
          color="success"
          variant="contained"
          onClick={handleClick}
        >
          Logout
        </Button>
      </Box>
    </div>
  );
};

export default HomePage;
