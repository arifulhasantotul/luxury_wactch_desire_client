import React from "react";
import { Container } from "react-bootstrap";
import * as BiIcons from "react-icons/bi";
import * as FiIcons from "react-icons/fi";
import * as MdIcons from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
   return (
      <Container fluid className="footer">
         <div className="footer_wrapper">
            {/* About us  */}
            <article className="box">
               <h3>About us</h3>
               <p>
                  We are a full-service best travel agency in Cumilla,
                  Bangladesh with a dedicated team of highly skilled and
                  experienced people to assist our valuable clients according to
                  their goals and desired journeys all over the world. We at
                  Adventure travels and tours strive our best to deliver the
                  outstanding service to all our customers.
               </p>
            </article>

            <article className="box">
               <h3>Branch location</h3>
               <NavLink to="/">
                  {" "}
                  <BiIcons.BiMapPin className="link_icon" /> India
               </NavLink>
               <NavLink to="/">
                  {" "}
                  <BiIcons.BiMapPin className="link_icon" /> Bangladesh
               </NavLink>
               <NavLink to="/">
                  {" "}
                  <BiIcons.BiMapPin className="link_icon" /> Japan
               </NavLink>
               <NavLink to="/">
                  {" "}
                  <BiIcons.BiMapPin className="link_icon" /> USA
               </NavLink>
               <NavLink to="/">
                  {" "}
                  <BiIcons.BiMapPin className="link_icon" /> France
               </NavLink>
            </article>

            <article className="box">
               <h3>Quick links</h3>
               <NavLink to="/home">
                  {" "}
                  <BiIcons.BiHome className="link_icon" /> Home
               </NavLink>
               <NavLink to="/dashboard/myOrders">
                  {" "}
                  <BiIcons.BiCollection className="link_icon" />
                  Dashboard
               </NavLink>
               <NavLink to="/products">
                  {" "}
                  <BiIcons.BiGridAlt className="link_icon" />
                  Products
               </NavLink>
               <NavLink to="/dashboard/review">
                  {" "}
                  <BiIcons.BiCommentDetail className="link_icon" /> Review
               </NavLink>
               <NavLink to="/">
                  {" "}
                  <MdIcons.MdOutlineContacts className="link_icon" /> Contact
               </NavLink>
            </article>

            <article className="box">
               <h3>Follow us</h3>
               <NavLink to="/">
                  {" "}
                  <FiIcons.FiFacebook className="link_icon" /> Facebook
               </NavLink>
               <NavLink to="/">
                  {" "}
                  <FiIcons.FiInstagram className="link_icon" />
                  Instagram
               </NavLink>
               <NavLink to="/">
                  {" "}
                  <FiIcons.FiTwitter className="link_icon" />
                  Twitter
               </NavLink>
               <NavLink to="/">
                  {" "}
                  <FiIcons.FiLinkedin className="link_icon" />
                  Linkedin
               </NavLink>
            </article>
         </div>
         <article>
            <h1 className="credit">
               &copy; created by <span>md ariful hasan</span> | all right
               reserved.
            </h1>
         </article>
      </Container>
   );
};

export default Footer;
