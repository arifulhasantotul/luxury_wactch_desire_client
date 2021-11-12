import React from "react";
import DashNav from "../DashNav/DashNav";

const ManageOrders = () => {
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
               <span>o</span>
               <span>r</span>
               <span>d</span>
               <span>e</span>
               <span>r</span>
               <span>s</span>
            </h1>
         </section>
      </div>
   );
};

export default ManageOrders;
