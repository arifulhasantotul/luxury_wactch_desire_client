import React from "react";
import { Link } from "react-router-dom";
import notfound from "./404.png";

const NotFound = () => {
   return (
      <section className="section_wrapper text-center">
         <h1 className="heading">
            <span>n</span>
            <span>o</span>
            <span>t</span>
            <span className="space"></span>
            <span>f</span>
            <span>o</span>
            <span>u</span>
            <span>n</span>
            <span>d</span>
         </h1>
         <img className="img-fluid" src={notfound} alt="" />
         <br />
         <Link to="/">
            <button className="btn_book">Go Home</button>
         </Link>
      </section>
   );
};

export default NotFound;
