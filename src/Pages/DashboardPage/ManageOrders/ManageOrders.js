import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Footer from "../../../components/Footer/Footer";
import SkeletonPackages from "../../../components/Skeleton/SkeletonPackages";
import DashNav from "../DashNav/DashNav";
import "./ManageOrders.css";
import OrderList from "./OrderList";

const ManageOrders = () => {
   const [orders, setOrders] = useState([]);
   const [ordersLoading, setOrdersLoading] = useState("");
   useEffect(() => {
      setOrdersLoading(true);
      const url = `https://stormy-oasis-18134.herokuapp.com/orders`;
      fetch(url)
         .then((res) => res.json())
         .then((data) => {
            setOrders(data);
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => setOrdersLoading(false));
   }, []);

   return (
      <div>
         <div className="container-fluid dashPage_wrapper">
            <section className="dashNav">
               <DashNav />
            </section>
            <section className="container-fluid dash_form_wrapper">
               <h1 className="dash_heading">
                  <span>m</span>
                  <span>a</span>
                  <span>n</span>
                  <span>a</span>
                  <span>g</span>
                  <span>e</span>
                  <span className="space"></span>
                  <span>o</span>
                  <span>r</span>
                  <span>d</span>
                  <span>e</span>
                  <span>r</span>
                  <span>s</span>
               </h1>

               <article className="row row-cols-1 g-4 justify-content-center">
                  <div className="col-12 col-lg-11 col-xl-10 mx-auto">
                     <Row
                        className="list_item"
                        style={{ color: "var(--orange)" }}
                     >
                        <Col className="my-auto hide_div">
                           <h3>Avatar</h3>
                        </Col>
                        <Col className="my-auto">
                           <h3>Product</h3>
                        </Col>
                        <Col className="my-auto hide_div">
                           <h3>Price</h3>
                        </Col>
                        <Col className="my-auto hide_div">
                           <h3>Customer</h3>
                        </Col>
                        <Col className="my-auto">
                           <h3>Email</h3>
                        </Col>
                        <Col className="my-auto">
                           {" "}
                           <h3>Status</h3>
                        </Col>
                        <Col sm={2} className="my-auto hide_div">
                           <h3>Action</h3>
                        </Col>
                     </Row>
                  </div>
                  {!ordersLoading &&
                     orders.map((order) => (
                        <OrderList
                           orders={orders}
                           setOrders={setOrders}
                           key={order._id}
                           order={order}
                           setOrdersLoading={setOrdersLoading}
                        />
                     ))}
                  {ordersLoading &&
                     [1, 2, 3, 4, 5, 6].map((n) => (
                        <SkeletonPackages key={n} />
                     ))}
               </article>
            </section>
         </div>
         <Footer />
      </div>
   );
};

export default ManageOrders;
