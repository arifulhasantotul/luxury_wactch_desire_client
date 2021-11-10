import React, { useEffect, useState } from "react";
import SkeletonPackages from "../../../components/Skeleton/SkeletonPackages";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
   const [products, setProducts] = useState([]);
   const [productsLoading, setProductsLoading] = useState(true);
   useEffect(() => {
      setProductsLoading(true);
      const url = `http://localhost:8080/products`;
      fetch(url)
         .then((res) => res.json())
         .then((data) => {
            setProducts(data);
         })
         .catch((error) => console.log(error))
         .finally(() => setProductsLoading(false));
   }, []);
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
            {!productsLoading &&
               products.map((pd) => (
                  <Product
                     key={pd._id}
                     className="product_item"
                     watch={pd}
                  ></Product>
               ))}
            {productsLoading &&
               [1, 2, 3, 4, 5, 6].map((n) => (
                  <SkeletonPackages key={n} theme="dark" />
               ))}
         </article>
      </section>
   );
};

export default Products;
