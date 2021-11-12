import React, { useEffect, useState } from "react";
import * as MdIcons from "react-icons/md";
import { useHistory } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import SkeletonPackages from "../../../components/Skeleton/SkeletonPackages";
import useAuth from "../../../hooks/useAuth";
import DashNav from "../../DashboardPage/DashNav/DashNav";
import PersonalOrder from "../PersonalOrder/PersonalOrder";
import "./MyOrders.css";

const MyOrders = () => {
   const history = useHistory();
   const { user } = useAuth();
   const [orders, setOrders] = useState([]);
   const [ordersLoading, setOrdersLoading] = useState(true);

   const goToShipping = () => {
      history.push("/shipping");
   };

   useEffect(() => {
      setOrdersLoading(true);
      const url = `http://localhost:8080/orders?email=${user.email}`;
      fetch(url)
         .then((res) => res.json())
         .then((data) => {
            setOrders(data);
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => setOrdersLoading(false));
   }, [user.email]);
   return (
      <div>
         <div className="container-fluid dashPage_wrapper">
            <section className="dashNav">
               <DashNav />
            </section>
            <section className="container-fluid order_wrapper">
               <h1 className="dash_heading">
                  <span>m</span>
                  <span>y</span>
                  <span className="space"></span>
                  <span>o</span>
                  <span>r</span>
                  <span>d</span>
                  <span>r</span>
                  <span>s</span>
               </h1>
               <article className="row row-cols-1 g-4 justify-content-center">
                  {!ordersLoading &&
                     orders.map((order) => (
                        <PersonalOrder
                           orders={orders}
                           setOrders={setOrders}
                           key={order._id}
                           order={order}
                        />
                     ))}
                  {ordersLoading &&
                     [1, 2, 3, 4, 5, 6].map((n) => (
                        <SkeletonPackages key={n} />
                     ))}
               </article>
               {!orders.length && (
                  <div className="no_order">Please order something</div>
               )}
               {orders.length > 0 && (
                  <div className="text-center pt-5">
                     <button className="btn_book" onClick={goToShipping}>
                        {" "}
                        <MdIcons.MdLocalShipping /> Proceed to Shipping
                     </button>
                  </div>
               )}
            </section>
         </div>
         <Footer />
      </div>
   );
};

export default MyOrders;
