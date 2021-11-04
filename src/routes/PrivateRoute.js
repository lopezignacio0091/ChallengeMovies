import { Redirect, Route } from "react-router";

const PrivateRoute = ({ children, ...rest }) => {
    //TODO: setear para que tome los datos de auth
    const auth = true;
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

export default PrivateRoute;