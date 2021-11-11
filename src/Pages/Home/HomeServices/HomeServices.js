import React from "react";
import HomeService from "../HomeService/HomeService";
import { HomeServiceData } from "./HomeServiceData";
import "./HomeServices.css";

const HomeServices = () => {
   return (
      <section className="section_wrapper">
         <h1 className="heading">
            <span>s</span>
            <span>e</span>
            <span>r</span>
            <span>v</span>
            <span>i</span>
            <span>c</span>
            <span>e</span>
            <span>s</span>
         </h1>
         <article className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
            {HomeServiceData.map((item, index) => (
               <HomeService key={index} item={item} />
            ))}
         </article>
      </section>
   );
};

export default HomeServices;
