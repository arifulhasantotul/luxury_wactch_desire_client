import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import DashNav from "../DashNav/DashNav";
import "./MakeAdmin.css";

const MakeAdmin = () => {
   const [posting, setPosting] = useState(false);
   const initialInfo = {
      email: "",
   };
   const [productInfo, setProductInfo] = useState(initialInfo);

   const handleOnBlur = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      const newInfo = { ...productInfo };
      newInfo[field] = value;
      console.log(newInfo);
      setProductInfo(newInfo);
   };

   const handleMakeAdmin = (e) => {
      e.preventDefault();
      setPosting(true);
   };
   return (
      <div>
         <div className="container-fluid dashPage_wrapper">
            <section className="dashNav">
               <DashNav />
            </section>
            <section className="container-fluid dash_form_wrapper">
               <h1 className="dash_heading">
                  <span>m</span>
                  <span>a</span>
                  <span>k</span>
                  <span>e</span>
                  <span className="space"></span>
                  <span>a</span>
                  <span>d</span>
                  <span>m</span>
                  <span>i</span>
                  <span>n</span>
               </h1>
               <form className="dash_form_login" onSubmit={handleMakeAdmin}>
                  <div className="input_field">
                     <span>Required Email</span>
                     <input
                        onBlur={handleOnBlur}
                        type="email"
                        name="email"
                        required
                     />
                  </div>

                  {!posting && (
                     <input
                        type="submit"
                        className="btn_book"
                        value="Make Admin"
                     />
                  )}

                  {posting && (
                     <Spinner
                        animation="border"
                        variant="secondary"
                        style={{
                           width: "4rem",
                           height: "4rem",
                           fontSize: "2rem",
                        }}
                     />
                  )}
               </form>
            </section>
         </div>
      </div>
   );
};

export default MakeAdmin;
