import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

const SubMenu = ({ item, setOpenSidebar }) => {
   const { tClass, path, icon, title, subNav, iconOpened, iconClosed } = item;

   const [openDropDown, setOpenDropDown] = useState(false);
   const showDropDownMenu = () => setOpenDropDown(!openDropDown);

   return (
      <>
         <NavLink
            to={path}
            className={tClass}
            activeClassName="selected"
            onClick={subNav && showDropDownMenu}
         >
            <div className="menu_row" onClick={() => setOpenSidebar(false)}>
               {icon} <span className="link_name">{title}</span>
            </div>
            <div className="arrow">
               {subNav && openDropDown
                  ? iconOpened
                  : subNav
                  ? iconClosed
                  : null}
            </div>
         </NavLink>
         {openDropDown &&
            subNav.map((dropdownMenu) => (
               <DropdownMenu
                  key={dropdownMenu.id}
                  dropdownItem={dropdownMenu}
               ></DropdownMenu>
            ))}
      </>
   );
};

export default SubMenu;
