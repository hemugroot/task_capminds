import React from "react";
import { LoginPage } from "./Pages/LoginPage";
import { SignUpPage } from "./Pages/SignUpPage";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { useData } from "./Context/DataProvider";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useData();

  return (
    <Route
      {...rest}
      render={(props) =>
        isValidate(user.user) ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

const PublicRoute = ({ component: Component, ...rest }) => {
  const user = useData();

  return (
    <Route
      {...rest}
      render={(props) =>
        isValidate(user.user) ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

const isValidate = (isUser) => {
  try {
    if (isUser) {
      return true;
    } else {
      return false;
    }
  } catch (err) {}
};

export const RoutesPage = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={HomePage} />
        <PublicRoute exact path="/signup" component={SignUpPage} />
        <PublicRoute exact path="/login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
};
