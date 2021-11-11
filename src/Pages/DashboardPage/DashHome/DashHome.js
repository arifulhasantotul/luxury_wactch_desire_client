import React from "react";
import DashNav from "../DashNav/DashNav";
import "./DashHome.css";

const DashHome = () => {
   return (
      <section className="container-fluid dashboard_wrapper">
         <DashNav />
      </section>
   );
};

export default DashHome;
