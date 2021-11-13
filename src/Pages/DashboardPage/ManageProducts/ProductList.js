import React from "react";
import { Col, Row } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import Rating from "react-rating";

const ProductList = ({
   products,
   setProducts,
   product,
   setProductsLoading,
}) => {
   const { _id, img, name, offerPrice, price, rating, status } = product;

   // order delete
   const handleProductDelete = (id) => {
      const deleteApi = window.confirm("Do you want to delete this?");
      if (deleteApi) {
         const url = `https://stormy-oasis-18134.herokuapp.com/products/${id}`;
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
                  const remaining = products.filter(
                     (order) => order._id !== id
                  );
                  setProducts(remaining);
               }
            });
      }
   };

   // update status
   const statusUpcoming = { status: "Upcoming" };
   const statusStock = { status: "Stock out" };
   const handleUpdateStatus = (id, status) => {
      const url = `https://stormy-oasis-18134.herokuapp.com/products/${id}`;
      fetch(url, {
         method: "PUT",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(status),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if (data.modifiedCount) {
               alert(`Updated Successfully`);
               handleRefresh();
            }
         });
   };

   // handleRefresh
   const handleRefresh = () => {
      setProductsLoading(true);
      const url = `https://stormy-oasis-18134.herokuapp.com/products`;
      fetch(url)
         .then((res) => res.json())
         .then((data) => {
            setProducts(data);
            console.log(data);
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => setProductsLoading(false));
   };

   return (
      <div className="col-12 col-lg-11 col-xl-10 mx-auto">
         <Row className="list_item ">
            <Col className="my-auto hide_div">
               <div className="figure">
                  <img className="img-fluid" src={img} alt="" />
               </div>
            </Col>
            <Col className="my-auto">
               <h4>{name}</h4>
            </Col>
            <Col className="my-auto hide_div">
               <h5>$ {offerPrice}</h5>
            </Col>
            <Col className="my-auto ">
               <h4>{price}</h4>
            </Col>
            <Col className="my-auto">
               <h5 className="ps-5">
                  <Rating
                     initialRating={rating}
                     emptySymbol={<FaIcons.FaRegStar />}
                     fullSymbol={<FaIcons.FaStar />}
                     readonly
                  />
               </h5>
            </Col>
            <Col className="my-auto">
               {" "}
               <p
                  className={
                     (status === "Available" && "available") ||
                     (status === "Upcoming" && "upcoming") ||
                     "outStock"
                  }
               >
                  {status}
               </p>
            </Col>
            <Col sm={2} className="action">
               <div>
                  <button
                     className="put"
                     onClick={() => {
                        handleUpdateStatus(_id, statusUpcoming);
                     }}
                  >
                     <MdIcons.MdOutlineLocalShipping />
                  </button>
               </div>
               <div>
                  <button
                     className="reject"
                     onClick={() => {
                        handleUpdateStatus(_id, statusStock);
                     }}
                  >
                     <MdIcons.MdOutlineCancel />
                  </button>
               </div>
               <div>
                  <button
                     className="del"
                     onClick={() => {
                        handleProductDelete(_id);
                     }}
                  >
                     <MdIcons.MdDeleteOutline />
                  </button>
               </div>
            </Col>
         </Row>
      </div>
   );
};

export default ProductList;
