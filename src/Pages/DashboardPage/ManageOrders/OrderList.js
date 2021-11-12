import React from "react";
import { Col, Row } from "react-bootstrap";
import * as MdIcons from "react-icons/md";
import { useHistory } from "react-router-dom";

const OrderList = ({ orders, setOrders, order }) => {
   const history = useHistory();
   const { _id, buyer, email, img, name, offerPrice, status } = order;

   // order delete
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

   // update status
   const statusShipped = { status: "Shipped" };
   const statusRejected = { status: "Rejected" };
   const handleUpdateStatus = (id, status) => {
      const url = `http://localhost:8080/orders/${id}`;
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
               history.push(`/dashboard/manageOrders`);
            }
         });
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
            <Col sm={2} className="action">
               <div>
                  <button
                     className="put"
                     onClick={() => {
                        handleUpdateStatus(_id, statusShipped);
                     }}
                  >
                     <MdIcons.MdOutlineLocalShipping />
                  </button>
               </div>
               <div>
                  <button
                     className="reject"
                     onClick={() => {
                        handleUpdateStatus(_id, statusRejected);
                     }}
                  >
                     <MdIcons.MdOutlineCancel />
                  </button>
               </div>
               <div>
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
