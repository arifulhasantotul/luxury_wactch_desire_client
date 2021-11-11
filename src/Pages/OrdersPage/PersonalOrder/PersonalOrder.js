import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import Rating from "react-rating";
import DetailsModal from "../../../components/DetailsModal/DetailsModal";

const PersonalOrder = ({ order, orders, setOrders }) => {
   const [modalShow, setModalShow] = useState(false);
   const {
      _id,
      buyer,
      email,
      name,
      details,
      offerPrice,
      price,
      rating,
      img,
      status,
   } = order;

   const handleOrderDelete = (id) => {
      const deleteApi = window.confirm("Do you want to delete this?");
      if (deleteApi) {
         const url = `http://localhost:8080/orders/${id}`;
         fetch(url, {
            method: "DELETE",
            headers: {
               "content-type": "application/json",
               Accept: "application/json",
            },
         })
            .then((res) => res.json())
            .then((data) => {
               if (data.deletedCount) {
                  alert("Deleted Successfully");
                  const remaining = orders.filter((order) => order._id !== id);
                  setOrders(remaining);
               }
            });
      }
   };

   return (
      <div className="col-12 col-lg-10 col-xl-6 mx-auto">
         <div className="box">
            <div className="figure">
               <img src={img} alt="..." />
               <button
                  onClick={() => setModalShow(true)}
                  // style={{ marginTop: "-5rem" }}
                  className="btn_book border-0 mx-3"
               >
                  {" "}
                  <FaIcons.FaEye
                     style={{
                        marginBottom: "0.5rem",
                        marginRight: "0.5rem",
                     }}
                  />
                  Quick View
               </button>
            </div>
            <div className="content">
               <h3>
                  {" "}
                  <span className="location_icon">
                     <MdIcons.MdWatch
                        style={{
                           marginBottom: "0.5rem",
                           marginRight: "0.5rem",
                        }}
                     />
                  </span>{" "}
                  <span>{name}</span>
               </h3>
               <p>{details.slice(0, 100)}...</p>
               <h5>{buyer}</h5>
               <h5>{email}</h5>
               <div className="box_star">
                  <Rating
                     initialRating={rating}
                     emptySymbol={<FaIcons.FaRegStar />}
                     fullSymbol={<FaIcons.FaStar />}
                     readonly
                  />
               </div>
               <div className="price">
                  {" "}
                  ${offerPrice} <span>${price}</span>
               </div>
               <div className={status === "Pending" ? "pending" : "shipped"}>
                  {status}
               </div>
               <button
                  style={{ width: "100%" }}
                  className="btn_book"
                  onClick={() => {
                     handleOrderDelete(_id);
                  }}
               >
                  <MdIcons.MdDelete
                     style={{
                        marginBottom: "0.5rem",
                        marginRight: "0.5rem",
                     }}
                  />
                  Delete Order
               </button>
            </div>
         </div>
         {/* modal  */}
         <DetailsModal
            show={modalShow}
            watch={order}
            onHide={() => setModalShow(false)}
         />
      </div>
   );
};

export default PersonalOrder;
