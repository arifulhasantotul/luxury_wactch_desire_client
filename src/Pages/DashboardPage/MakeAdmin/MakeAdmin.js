import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
// import useAuth from "../../../hooks/useAuth";
import DashNav from "../DashNav/DashNav";
import "./MakeAdmin.css";

const MakeAdmin = () => {
   const history = useHistory();
   // const { userAuthToken } = useAuth();
   const [email, setEmail] = useState("");
   const [posting, setPosting] = useState(false);
   // const [adminCreate, setAdminCreate] = useState(false);

   const handleOnBlur = (e) => {
      setEmail(e.target.value);
   };
   const handleMakeAdmin = (e) => {
      setPosting(true);
      const user = { email };
      console.log(user);
      e.preventDefault();
      const url = `https://stormy-oasis-18134.herokuapp.com/users/admin`;
      fetch(url, {
         method: "PUT",
         headers: {
            // sending token to backend
            // authorization: `Bearer ${userAuthToken}`,
            "content-type": "application/json",
         },
         body: JSON.stringify(user),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.modifiedCount) {
               console.log(data);
               // setAdminCreate(true);
               alert("Admin created");
               history.push("/dashboard/manageUsers");
            }
         })
         .catch((error) => console.log(error))
         .finally(() => setPosting(false));
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
                        placeholder="********@gmail.com"
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
