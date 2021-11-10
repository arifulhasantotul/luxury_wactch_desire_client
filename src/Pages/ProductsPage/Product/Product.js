import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import Rating from "react-rating";
import DetailsModal from "../../../components/DetailsModal/DetailsModal";

const Product = ({ watch }) => {
   const [modalShow, setModalShow] = useState(false);
   const { name, details, offerPrice, price, rating, img } = watch;
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
               <button style={{ width: "100%" }} className="btn_book">
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
