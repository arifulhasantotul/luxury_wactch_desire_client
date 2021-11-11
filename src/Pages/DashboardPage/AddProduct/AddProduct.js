import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import "../../../Pages/User/Login/Login.css";

const AddProduct = () => {
   const [posting, setPosting] = useState(false);
   const initialInfo = {
      name: "",
      details: "",
      offerPrice: "",
      price: "",
      rating: "",
      img: "",
   };
   const [productInfo, setProductInfo] = useState(initialInfo);

   const handleOnBlur = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      const newInfo = { ...productInfo };
      newInfo[field] = value;
      console.log(newInfo);
      setProductInfo(newInfo);
   };

   const handleProductSubmit = (e) => {
      setPosting(true);
      e.preventDefault();
      const newProduct = {
         ...productInfo,
      };
      const url = `http://localhost:8080/products`;
      fetch(url, {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(newProduct),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.insertedId) {
               alert("successfully added review");
               e.target.reset();
            }
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => setPosting(false));
   };

   return (
      <div className="container-fluid form_wrapper">
         <h1 className="heading">
            <span>a</span>
            <span>d</span>
            <span>d</span>
            <span className="space"></span>
            <span>p</span>
            <span>r</span>
            <span>o</span>
            <span>d</span>
            <span>c</span>
            <span>t</span>
         </h1>
         {/* {authError && <div style={{ color: "red" }}></div>} */}

         <form className="form_login" onSubmit={handleProductSubmit}>
            <div className="input_field">
               <span>Product Name</span>
               <input onBlur={handleOnBlur} type="text" name="name" required />
            </div>
            <div className="input_field">
               <span>Discount Price</span>
               <input
                  onBlur={handleOnBlur}
                  type="text"
                  name="offerPrice"
                  required
               />
            </div>
            <div className="input_field">
               <span>Product Price</span>
               <input onBlur={handleOnBlur} type="text" name="price" required />
            </div>
            <div className="input_field">
               <span>Rating</span>
               <input
                  onBlur={handleOnBlur}
                  type="text"
                  name="rating"
                  placeholder="Give number between 1-5"
                  required
               />
            </div>
            <div className="input_field">
               <span>Image Link</span>
               <input onBlur={handleOnBlur} type="text" name="img" required />
            </div>
            <div className="input_field">
               <span>Details</span>
               <textarea
                  type="text"
                  name="details"
                  onBlur={handleOnBlur}
                  placeholder="Please leave details.(Maximum 200 words)"
                  required
               />
            </div>

            {!posting && (
               <input type="submit" className="btn_book" value="Add Product" />
            )}

            {posting && (
               <Spinner
                  animation="border"
                  variant="secondary"
                  style={{ width: "4rem", height: "4rem", fontSize: "2rem" }}
               />
            )}
         </form>
      </div>
   );
};

export default AddProduct;
