import React from "react";
import { Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as FcIcons from "react-icons/fc";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "../Login/Login.css";

const Register = () => {
   const location = useLocation();
   const history = useHistory();
   const {
      signInUsingGoogle,
      isLoading,
      registerUserEmail,
      setAuthError,
      authError,
   } = useAuth();
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const redirect_uri = location?.state?.from || "/";

   const handleGoogleSignIn = () => {
      signInUsingGoogle(history, redirect_uri);
   };
   const onSubmit = (data) => {
      if (data.password < 6) {
         setAuthError("Password should be more then 6 character");
         return;
      }
      if (data.password !== data.checkPassword) {
         setAuthError("Your password did not match");
         return;
      }

      registerUserEmail(
         data.displayName,
         data.email,
         data.password,
         history,
         redirect_uri
      );
   };
   return (
      <div className="container-fluid form_wrapper">
         <h1 className="heading">
            <span>r</span>
            <span>e</span>
            <span>g</span>
            <span>i</span>
            <span>s</span>
            <span>t</span>
            <span>e</span>
            <span>r</span>
         </h1>
         {authError && <div style={{ color: "red" }}></div>}
         {!isLoading && (
            <form className="form_login" onSubmit={handleSubmit(onSubmit)}>
               <div className="input_field">
                  <span>Your Name</span>
                  <input
                     type="text"
                     {...register("displayName", { required: true })}
                  />
                  {errors.displayName && (
                     <span className="error">Name is required</span>
                  )}
               </div>
               <div className="input_field">
                  <span>Your Email</span>
                  <input
                     type="email"
                     {...register("email", { required: true })}
                  />
                  {errors.email && (
                     <span className="error">Email is required</span>
                  )}
               </div>

               <div className="input_field">
                  <span>Your Password</span>
                  <input
                     type="password"
                     {...register("password", { required: true })}
                  />

                  {errors.password && (
                     <span className="error">Give password</span>
                  )}
               </div>

               <div className="input_field">
                  <span>Re-enter Password</span>
                  <input
                     type="password"
                     {...register("checkPassword", { required: true })}
                  />

                  {errors.checkPassword && (
                     <span className="error">Give password again</span>
                  )}
               </div>

               <input type="submit" className="btn_book" value="Create" />
               <p>
                  already have an account? <Link to="/login">Login now</Link>
               </p>
            </form>
         )}
         <div className="other_login">
            <h3>Sign in via</h3>
            {!isLoading && (
               <button onClick={handleGoogleSignIn}>
                  {" "}
                  <span className="login_icon">
                     <FcIcons.FcGoogle />{" "}
                  </span>
               </button>
            )}
            {isLoading && (
               <Spinner
                  animation="border"
                  variant="info"
                  style={{ width: "4rem", height: "4rem", fontSize: "2rem" }}
               />
            )}
         </div>
      </div>
   );
};

export default Register;
