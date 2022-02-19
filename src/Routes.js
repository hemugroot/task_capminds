import React from "react";
import { LoginPage } from "./Pages/LoginPage";
import { SignUpPage } from "./Pages/SignUpPage";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { useData } from "./Context/DataProvider";

export const RoutesPage = () => {
  const user = useData();

  const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          user !== "" ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    );
  };

  const PublicRoute = ({ component: Component, ...rest }) => {
    return (
      <PublicRoute
        {...rest}
        render={(props) =>
          user !== "" ? <Redirect to="/home" /> : <Component {...props} />
        }
      />
    );
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
};
