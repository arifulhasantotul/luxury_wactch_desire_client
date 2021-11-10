import React from "react";
import { Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as FcIcons from "react-icons/fc";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";

const Login = () => {
   const location = useLocation();
   const history = useHistory();
   const { signInUsingGoogle, isLoading } = useAuth();
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const redirect_uri = location?.state?.form || "/";

   const handleGoogleSignIn = () => {
      signInUsingGoogle(history, redirect_uri);
   };
   const onSubmit = (data) => {
      console.log(data);
      // signInWithEmail(data.email, data.password, redirect_uri);
   };
   return (
      <div className="container-fluid form_wrapper">
         <h1 className="heading">
            <span>l</span>
            <span>o</span>
            <span>g</span>
            <span>i</span>
            <span>n</span>
         </h1>
         {/* {authError && <div style={{ color: "red" }}></div>} */}
         {!isLoading && (
            <form className="form_login" onSubmit={handleSubmit(onSubmit)}>
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

               <input type="submit" className="btn_book" value="Login" />
               <p>
                  don't have account? <Link to="/register">Create one</Link>
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

export default Login;
