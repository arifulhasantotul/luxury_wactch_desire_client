import React from "react";
import DashNav from "../DashNav/DashNav";
import "./DashPay.css";

const DashPay = () => {
   return (
      <div className="container-fluid dashPage_wrapper">
         <section className="dashNav">
            <DashNav />
         </section>
         <section className="container-fluid order_wrapper">
            <h1 className="dash_heading">
               <span>p</span>
               <span>a</span>
               <span>y</span>
               <span>m</span>
               <span>e</span>
               <span>n</span>
               <span>t</span>
            </h1>

            <h2>Payment method coming soon!</h2>
         </section>
      </div>
   );
};

export default DashPay;
