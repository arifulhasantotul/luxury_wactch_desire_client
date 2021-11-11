import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import "../Login/Login.css";

const AddReview = () => {
   const { user } = useAuth();
   const [loadPost, setLoadPost] = useState(false);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = (data) => {
      console.log(data);
   };
   return (
      <div className="container-fluid form_wrapper">
         <h1 className="heading">
            <span>a</span>
            <span>d</span>
            <span>d</span>
            <span className="space"></span>
            <span>r</span>
            <span>e</span>
            <span>v</span>
            <span>i</span>
            <span>e</span>
            <span>w</span>
         </h1>
         {/* {authError && <div style={{ color: "red" }}></div>} */}

         <form className="form_login" onSubmit={handleSubmit(onSubmit)}>
            <div className="input_field">
               <span>Your Name</span>
               <input
                  type="text"
                  defaultValue={user.displayName}
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
                  defaultValue={user.email}
                  {...register("email", { required: true })}
               />
               {errors.email && (
                  <span className="error">Email is required</span>
               )}
            </div>

            <div className="input_field">
               <span>Rating</span>
               <input type="text" {...register("rating", { required: true })} />

               {errors.rating && (
                  <span className="error">Give rating between 1-5</span>
               )}
            </div>

            <div className="input_field">
               <span>Image Link</span>
               <input
                  type="text"
                  {...register("avatar", { required: false })}
               />

               {errors.avatar && (
                  <span className="error">Give a image link please</span>
               )}
            </div>

            <div className="input_field">
               <span>Comment</span>
               <input
                  type="text"
                  {...register("comment", { required: true })}
               />

               {errors.comment && (
                  <span className="error">
                     Please give a comment not more than 200 words
                  </span>
               )}
            </div>

            <input type="submit" className="btn_book" value="Add Review" />
            {loadPost && (
               <Spinner
                  animation="border"
                  variant="secondary"
                  style={{ width: "4rem", height: "4rem", fontSize: "2rem" }}
               />
            )}
         </form>
      </div>
   );
};

export default AddReview;
