import React, { useEffect, useState } from "react";
import SkeletonPackages from "../../../components/Skeleton/SkeletonPackages";
import useAuth from "../../../hooks/useAuth";
import PersonalOrder from "../PersonalOrder/PersonalOrder";
import "./MyOrders.css";

const MyOrders = () => {
   const { user } = useAuth();
   const [orders, setOrders] = useState([]);
   const [ordersLoading, setOrdersLoading] = useState(true);

   useEffect(() => {
      setOrdersLoading(true);
      const url = `http://localhost:8080/orders?email=${user.email}`;
      fetch(url)
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setOrders(data);
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => setOrdersLoading(false));
   }, [user.email]);
   return (
      <section className="container-fluid watch_wrapper">
         <h1 className="heading">
            <span>w</span>
            <span>a</span>
            <span>t</span>
            <span>c</span>
            <span>h</span>
            <span>e</span>
            <span>s</span>
         </h1>
         <article className="row row-cols-1 g-4 justify-content-center">
            {!ordersLoading &&
               orders.map((order) => (
                  <PersonalOrder key={order._id} order={order} />
               ))}
            {ordersLoading &&
               [1, 2, 3, 4, 5, 6].map((n) => (
                  <SkeletonPackages key={n} theme="dark" />
               ))}
         </article>
      </section>
   );
};

export default MyOrders;
