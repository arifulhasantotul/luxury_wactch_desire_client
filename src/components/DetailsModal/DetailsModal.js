import React from "react";
import { Modal } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import Rating from "react-rating";
import "./DetailsModal.css";

const DetailsModal = (props) => {
   const { name, details, offerPrice, price, rating, img } = props.watch;
   return (
      <>
         <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="modal"
            // style={{ maxWidth: "800px", margin: "0 auto" }}
         >
            <Modal.Header closeButton>
               {/* <Modal.Title id="contained-modal-title-vcenter">
                  {name}
               </Modal.Title> */}
            </Modal.Header>
            <Modal.Body>
               <div className="box row g-0">
                  <div className="col-12 col-md-4 ">
                     <img src={img} alt="..." />
                  </div>
                  <div className="content col-12 col-md-8">
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
                     <p>{details}...</p>
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
                  </div>
               </div>
            </Modal.Body>
            {/* <Modal.Footer>
               <button className="btn_book" onClick={props.onHide}>
                  Close
               </button>
            </Modal.Footer> */}
         </Modal>
      </>
   );
};

export default DetailsModal;
