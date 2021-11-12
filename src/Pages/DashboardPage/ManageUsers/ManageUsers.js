import React, { useEffect, useState } from "react";
import DashNav from "../DashNav/DashNav";

const ManageUsers = () => {
   const [users, setUsers] = useState([]);
   const [usersLoading, setUsersLoading] = useState("");
   useEffect(() => {
      setUsersLoading(true);
      const url = `http://localhost:8080/users`;
      fetch(url)
         .then((res) => res.json())
         .then((data) => {
            setUsers(data);
            console.log(data);
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => setUsersLoading(false));
   }, []);
   console.log(users, usersLoading);
   return (
      <div className="container-fluid dashPage_wrapper">
         <section className="dashNav">
            <DashNav />
         </section>
         <section className="container-fluid dash_form_wrapper">
            <h1 className="dash_heading">
               <span>m</span>
               <span>a</span>
               <span>n</span>
               <span>a</span>
               <span>g</span>
               <span>e</span>
               <span className="space"></span>
               <span>u</span>
               <span>s</span>
               <span>e</span>
               <span>r</span>
               <span>s</span>
            </h1>
         </section>
      </div>
   );
};

export default ManageUsers;
