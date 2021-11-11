import React from "react";
import * as MdIcons from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./DashNav.css";

const DashNav = () => {
   return (
      <div className="sidebarDash">
         <div className="sidebarWrapper">
            {/* dashboard  */}
            <div className="sidebarMenu">
               <h3 className="sidebarTitle">Dashboard</h3>
               <ul className="sidebarList">
                  <NavLink
                     activeClassName="selected"
                     to="/dashboard/myOrders"
                     className="sidebarListItem active"
                  >
                     <MdIcons.MdLineStyle className="sidebarIcon" />
                     My Orders
                  </NavLink>
                  <NavLink
                     activeClassName="selected"
                     to="/dashboard/pay"
                     className="sidebarListItem"
                  >
                     <MdIcons.MdAttachMoney className="sidebarIcon" />
                     Pay
                  </NavLink>
                  <NavLink
                     activeClassName="selected"
                     to="/dashboard/review"
                     className="sidebarListItem"
                  >
                     <MdIcons.MdTrendingUp className="sidebarIcon" />
                     Review
                  </NavLink>
               </ul>
            </div>
            {/* quick menu  */}
            <div className="sidebarMenu">
               <h3 className="sidebarTitle">Admin</h3>
               <ul className="sidebarList">
                  <NavLink
                     activeClassName="selected"
                     to="/dashboard/makeAdmin"
                     className="sidebarListItem"
                  >
                     <MdIcons.MdPermIdentity className="sidebarIcon" />
                     Make Admin
                  </NavLink>
                  <NavLink
                     activeClassName="selected"
                     to="/dashboard/addProduct"
                     className="sidebarListItem"
                  >
                     <MdIcons.MdStorefront className="sidebarIcon" />
                     Add Products
                  </NavLink>
                  <NavLink
                     activeClassName="selected"
                     to="/dashboard/manageProducts"
                     className="sidebarListItem"
                  >
                     <MdIcons.MdAttachMoney className="sidebarIcon" />
                     Manage Products
                  </NavLink>
                  <NavLink
                     activeClassName="selected"
                     to="/dashboard/manageOrders"
                     className="sidebarListItem"
                  >
                     <MdIcons.MdBarChart className="sidebarIcon" />
                     Manage Orders
                  </NavLink>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default DashNav;
