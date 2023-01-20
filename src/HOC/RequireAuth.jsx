/* Isme private route baaana lena */

// import React from "react";
// import { useSelector } from "react-redux";
// import { Navigate, useLocation } from "react-router-dom";

// const RequireAuth = ({ children }) => {
//   const { isLoggedIn } = useSelector((store) => store.auth);
//   const { pathname } = useLocation();

//   if (isLoggedIn) {
//     return children;
//   } else {
//     return (
//       // Redirecting to Login page
//       <Navigate
//         to="/login"
//         state={{ from: pathname }}
//         replace
//       />
//     );
//   }
// };

// export default RequireAuth;

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

// 1. This particular component shall be a wrapper which based on authentication status either redirects user back to login page or renders the same page;
// 2. if user is not logged in; user should be redirected to the login page;

const RequireAuth = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default RequireAuth;
