import React, { useEffect, useState } from "react";
import SkeletonPackages from "../../../components/Skeleton/SkeletonPackages";
import HomeProduct from "../HomeProduct/HomeProduct";
import "./HomeProducts.css";

const HomeProducts = () => {
   const [products, setProducts] = useState([]);
   const [productsLoading, setProductsLoading] = useState(true);
   useEffect(() => {
      setProductsLoading(true);
      const url = `http://localhost:8080/products`;
      fetch(url)
         .then((res) => res.json())
         .then((data) => {
            const filterProducts = data.filter((item) => item.key <= 6);
            setProducts(filterProducts);
         })
         .catch((error) => console.log(error))
         .finally(() => setProductsLoading(false));
   }, []);
   return (
      <section className="container-fluid package_wrapper">
         <h1 className="heading">
            <span>w</span>
            <span>a</span>
            <span>t</span>
            <span>c</span>
            <span>h</span>
            <span>e</span>
            <span>s</span>
         </h1>
         <article className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
            {!productsLoading &&
               products.map((pd) => (
                  <HomeProduct
                     key={pd._id}
                     className="products_wrapper"
                     watch={pd}
                  ></HomeProduct>
               ))}
            {productsLoading &&
               [1, 2, 3, 4, 5, 6].map((n) => (
                  <SkeletonPackages key={n} theme="dark" />
               ))}
         </article>
      </section>
   );
};

export default HomeProducts;
