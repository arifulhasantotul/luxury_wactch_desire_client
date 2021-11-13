import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Footer from "../../../components/Footer/Footer";
import SkeletonPackages from "../../../components/Skeleton/SkeletonPackages";
import DashNav from "../DashNav/DashNav";
import ProductList from "./ProductList";

const ManageProducts = () => {
   const [products, setProducts] = useState([]);
   const [productsLoading, setProductsLoading] = useState("");
   useEffect(() => {
      setProductsLoading(true);
      const url = `https://stormy-oasis-18134.herokuapp.com/products`;
      fetch(url)
         .then((res) => res.json())
         .then((data) => {
            setProducts(data);
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => setProductsLoading(false));
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
                  <span>p</span>
                  <span>r</span>
                  <span>o</span>
                  <span>d</span>
                  <span>c</span>
                  <span>t</span>
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
                           <h3>Discount </h3>
                        </Col>
                        <Col className="my-auto">
                           <h3>Price</h3>
                        </Col>

                        <Col className="my-auto">
                           <h3>Rating</h3>
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
                  {!productsLoading &&
                     products.map((product) => (
                        <ProductList
                           products={products}
                           setProducts={setProducts}
                           key={product._id}
                           product={product}
                           setProductsLoading={setProductsLoading}
                        />
                     ))}
                  {productsLoading &&
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

export default ManageProducts;
