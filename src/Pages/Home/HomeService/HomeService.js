import React from "react";

const HomeService = ({ item }) => {
   const { icon, name, text } = item;
   return (
      <div className="text-white col">
         <div className="service">
            <div className="service_icon">
               <span> {icon} </span>
            </div>
            <div className="service_details">
               <h3>{name}</h3>
               <p>{text}</p>
            </div>
         </div>
      </div>
   );
};

export default HomeService;
