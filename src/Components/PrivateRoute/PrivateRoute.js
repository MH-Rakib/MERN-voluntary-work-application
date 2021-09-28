import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { UserContext } from "./../../App";
import { Redirect } from "react-router";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = user;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.isSigned ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/Login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
