import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import Rating from "react-rating";
// import { useHistory } from "react-router-dom";
import DetailsModal from "../../../components/DetailsModal/DetailsModal";
import useAuth from "../../../hooks/useAuth";

const Product = ({ watch }) => {
   const { user } = useAuth();
   // const history = useHistory();
   const [modalShow, setModalShow] = useState(false);
   console.log(watch);
   const { name, details, offerPrice, price, rating, img } = watch;

   const handleOrder = () => {
      const buyer = user.displayName;
      const email = user.email;
      const status = "Pending";
      const newCart = {
         buyer,
         email,
         name,
         details,
         offerPrice,
         price,
         rating,
         img,
         status,
      };

      const url = `http://localhost:8080/orders`;
      fetch(url, {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(newCart),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if (data.insertedId && !user.email) {
               alert(
                  "Successfully added to order list but you have to login to see orders list"
               );
               // history.push(`orders/myOrders/${_id}`);
            }
            if (data.insertedId && user.email) {
               alert("Successfully added to order list");
               // history.push(`orders/myOrders/${_id}`);
            }
         })
         .catch((error) => {
            console.log(error.message);
         });
   };

   return (
      <div className="col-12 col-md-8 col-lg-7 col-xl-6 mx-auto">
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
               <button
                  style={{ width: "100%" }}
                  className="btn_book"
                  onClick={handleOrder}
               >
                  <MdIcons.MdAddShoppingCart
                     style={{
                        marginBottom: "0.5rem",
                        marginRight: "0.5rem",
                     }}
                  />
                  Add To Cart
               </button>
            </div>
         </div>
         {/* modal  */}
         <DetailsModal
            show={modalShow}
            watch={watch}
            onHide={() => setModalShow(false)}
         />
      </div>
   );
};

export default Product;
