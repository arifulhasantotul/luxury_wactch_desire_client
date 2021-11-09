import React from "react";
import { IconContext } from "react-icons";
import { NavLink } from "react-router-dom";

const DropdownMenu = (props) => {
   const { title, tClass, path, icon } = props.dropdownItem;

   return (
      <>
         <IconContext.Provider value={{ color: "#fff", size: "1.8rem" }}>
            <NavLink to={path} className={tClass}>
               {icon}
               <span className="sub_link_name">{title}</span>
            </NavLink>
         </IconContext.Provider>
      </>
   );
};

export default DropdownMenu;
