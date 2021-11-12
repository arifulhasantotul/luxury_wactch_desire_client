import React from "react";
import { Col, Row } from "react-bootstrap";
import * as MdIcons from "react-icons/md";

const OrderList = ({ orders, setOrders, order }) => {
   const { _id, buyer, email, img, name, offerPrice, status } = order;

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
            <Col className="my-auto hide_div">
               <h4>{buyer}</h4>
            </Col>
            <Col className="my-auto">
               <h5>{email}</h5>
            </Col>
            <Col className="my-auto">
               {" "}
               <p
                  className={
                     (status === "Pending" && "pending") ||
                     (status === "Shipped" && "shipped") ||
                     "rejected"
                  }
               >
                  {status}
               </p>
            </Col>
            <Col className="my-auto d-flex align-items-center justify-content-around">
               <div className="put_btn">
                  <button className="put">
                     <MdIcons.MdOutlineLocalShipping />
                  </button>
               </div>
               <div className="put_btn">
                  <button className="reject">
                     <MdIcons.MdOutlineCancel />
                  </button>
               </div>
               <div className="del_btn">
                  <button
                     className="del"
                     onClick={() => {
                        handleOrderDelete(_id);
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

export default OrderList;
