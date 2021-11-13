import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import "../../User/Login/Login.css";
import "./Shipping.css";

const Shipping = () => {
   const { user } = useAuth();
   const [posting, setPosting] = useState(false);
   const [shippingInfo, setShippingInfo] = useState([]);
   const initialInfo = {
      name: user.displayName,
      email: user.email,
      address: "",
      avatar: user.photoURL || "",
      phone: "",
   };
   const [reviewInfo, setReviewInfo] = useState(initialInfo);

   // getting input data
   const handleOnBlur = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      const newInfo = { ...reviewInfo };
      newInfo[field] = value;
      console.log(newInfo);
      setReviewInfo(newInfo);
   };

   // get shipping
   const handleShippingInfo = () => {
      setPosting(true);
      const url = `https://stormy-oasis-18134.herokuapp.com/shipping?email=${user.email}`;
      fetch(url)
         .then((res) => res.json())
         .then((data) => setShippingInfo(data))
         .catch((error) => console.log(error))
         .finally(() => setPosting(false));
   };

   // post shipping data
   const handleShippingSubmit = (e) => {
      setPosting(true);
      e.preventDefault();
      const newShipping = {
         ...reviewInfo,
      };
      const url = `https://stormy-oasis-18134.herokuapp.com/shipping`;
      fetch(url, {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(newShipping),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.insertedId) {
               alert("successfully added shipped info");
               e.target.reset();
            }
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => setPosting(false));
   };

   return (
      <div className="container-fluid form_wrapper">
         <h1 className="heading">
            <span>s</span>
            <span>h</span>
            <span>i</span>
            <span>p</span>
            <span>p</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
         </h1>
         {/* {authError && <div style={{ color: "red" }}></div>} */}

         <form className="form_login" onSubmit={handleShippingSubmit}>
            <div className="input_field">
               <span>Your Name</span>
               <input
                  onBlur={handleOnBlur}
                  type="text"
                  defaultValue={user.displayName}
                  name="name"
                  readOnly
                  required
               />
            </div>
            <div className="input_field">
               <span>Your Email</span>
               <input
                  onBlur={handleOnBlur}
                  type="email"
                  name="email"
                  defaultValue={user.email}
                  readOnly
                  required
               />
            </div>
            <div className="input_field">
               <span>Address</span>
               <input
                  onBlur={handleOnBlur}
                  type="text"
                  name="address"
                  required
               />
            </div>
            <div className="input_field">
               <span>Image Link</span>
               <input
                  onBlur={handleOnBlur}
                  type="text"
                  name="avatar"
                  defaultValue={user.photoURL ? user.photoURL : ""}
                  required
               />
            </div>
            <div className="input_field">
               <span>Mobile</span>
               <input type="tel" name="phone" onBlur={handleOnBlur} required />
            </div>

            {!posting && (
               <input type="submit" className="btn_book" value="Confirm" />
            )}

            {posting && (
               <Spinner
                  animation="border"
                  variant="secondary"
                  style={{ width: "4rem", height: "4rem", fontSize: "2rem" }}
               />
            )}
         </form>

         <div className="text-center pt-5">
            <button className="btn_book" onClick={handleShippingInfo}>
               Shipping Info
            </button>
         </div>

         {!posting && shippingInfo.length && (
            <h1 className="heading">
               <span>i</span>
               <span>n</span>
               <span>f</span>
               <span>r</span>
               <span>m</span>
               <span>a</span>
               <span>t</span>
               <span>i</span>
               <span>o</span>
               <span>n</span>
            </h1>
         )}

         {!posting &&
            shippingInfo.length &&
            shippingInfo.map((item) => (
               <div key={item._id} id="container">
                  <div className="product-details">
                     <h1>Thank You!</h1>

                     <p className="information">
                        " Let's spread the joy , here is Christmas , the most
                        awaited day of the year.Christmas Tree is what one need
                        the most. Here is the correct tree which will enhance
                        your Christmas.
                     </p>
                  </div>

                  <div className="product-image">
                     <img
                        src="https://images.unsplash.com/photo-1606830733744-0ad778449672?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNocmlzdG1hcyUyMHRyZWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        alt=""
                     />

                     <div className="info">
                        <h2>Information</h2>
                        <ul>
                           {user?.photoURL && (
                              <img
                                 src={user.photoURL}
                                 style={{
                                    width: "5rem",
                                    height: "5rem",
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    marginBottom: "1rem",
                                 }}
                                 alt=""
                              />
                           )}
                           <li>
                              <strong>Name : </strong>
                              {item.name}
                           </li>
                           <li>
                              <strong>Email : </strong>
                              {item.email}
                           </li>
                           <li>
                              <strong>Address: </strong>
                              {item.address}
                           </li>
                           <li>
                              <strong>Phone: </strong>
                              {item.phone}
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            ))}
      </div>
   );
};

export default Shipping;
