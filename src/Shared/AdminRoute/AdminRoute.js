import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
   const { user, isLoading, admin } = useAuth();
   if (isLoading) {
      return <Spinner animation="border" variant="warning" />;
   }
   return (
      <Route
         {...rest}
         render={({ location }) =>
            (user.email && admin) ||
            (user.displayName && admin) ||
            (user.photoURL && admin) ? (
               children
            ) : (
               <Redirect to={{ pathname: "/", state: { from: location } }} />
            )
         }
      />
   );
};

export default AdminRoute;
