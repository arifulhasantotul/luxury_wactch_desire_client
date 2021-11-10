import React from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import Rating from "react-rating";

const HomeProduct = ({ watch }) => {
   const { name, details, offerPrice, price, rating, img } = watch;
   return (
      <div className="col">
         <div className="box">
            <img className="img-fluid" src={img} alt="..." />
            <button
               style={{ marginTop: "-5rem" }}
               className="btn_book border-0 mx-3"
            >
               Quick View
            </button>
            <div className="content">
               <h3>
                  {" "}
                  <span className="location_icon">
                     <MdIcons.MdLocationPin />
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
                  Book Now
               </button>
            </div>
         </div>
      </div>
   );
};

export default HomeProduct;
