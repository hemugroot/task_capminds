import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const INIT_CONTEXT = {
  user: "",
  setUser: () => {},
  login: () => {},
  SignUp: () => {},
  check: () => {},
};

export const DataContext = createContext(INIT_CONTEXT);

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const SignUp = ({ fullName, mail, password, history }) => {
    let url = "https://shgdb.000webhostapp.com/API/signUp.php";
    var params = new URLSearchParams();
    params.append("UserName", fullName);
    params.append("Email", mail);
    params.append("Password", password);

    axios
      .post(url, params)
      .then((res) => {
        setUser(fullName);
        history.push("/home");
      })
      .catch((ex) => {});
  };

  const login = ({ email, pass, history }) => {
    let url = "https://shgdb.000webhostapp.com/API/user.php";
    var params = new URLSearchParams();
    params.append("Email", email);
    params.append("Password", pass);
    axios
      .post(url, params)
      .then((res) => {
        setUser(res.data[0]["UserName"]);
        history.push("/");
      })
      .catch((er) => {
        history.push("/signup");
      });
  };

  return (
    <DataContext.Provider value={{ user, setUser, login, SignUp }}>
      {children}
    </DataContext.Provider>
  );
};
