import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import Rating from "react-rating";
import { useHistory } from "react-router-dom";
import SwiperCore, {
   Autoplay,
   EffectCoverflow,
   Keyboard,
   Pagination,
   Virtual,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../../../components/Footer/Footer";
import SkeletonPackages from "../../../components/Skeleton/SkeletonPackages";
import DashNav from "../DashNav/DashNav";
import "./DashReview.css";

SwiperCore.use([Virtual, EffectCoverflow, Pagination, Autoplay, Keyboard]);

const DashReview = () => {
   const history = useHistory();
   const [reviews, setReviews] = useState([]);
   const [reviewsLoading, setReviewsLoading] = useState(true);

   const goToReview = () => {
      history.push("/addReview");
   };
   useEffect(() => {
      setReviewsLoading(true);
      const url = `http://localhost:8080/reviews`;
      fetch(url)
         .then((res) => res.json())
         .then((data) => {
            setReviews(data);
         })
         .catch((error) => console.log(error))
         .finally(() => setReviewsLoading(false));
   }, []);
   return (
      <div>
         <div className="container-fluid dash_review_container">
            <section className="dashNav">
               <DashNav />
            </section>
            <section className="container review_wrapper">
               <h1 className="dash_heading">
                  <span>r</span>
                  <span>e</span>
                  <span>v</span>
                  <span>i</span>
                  <span>e</span>
                  <span>w</span>
               </h1>
               {reviews.length > 0 && (
                  <Swiper
                     effect={"coverflow"}
                     coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                     }}
                     grabCursor={true}
                     autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                     }}
                     keyboard={{ enabled: true }}
                     centeredSlides={true}
                     pagination={{
                        type: "fraction",
                     }}
                     slidesPerView={1.5}
                     spaceBetween={10}
                     breakpoints={{
                        768: {
                           slidesPerView: 2,
                           spaceBetween: 10,
                        },
                        1024: {
                           slidesPerView: 2,
                           spaceBetween: 10,
                        },
                        1500: {
                           slidesPerView: 3,
                           spaceBetween: 30,
                        },
                     }}
                     virtual
                  >
                     {!reviewsLoading &&
                        reviews.map((item, index) => (
                           <SwiperSlide key={index} className="slide">
                              <span className="dash_review_quote">
                                 {" "}
                                 <FaIcons.FaQuoteRight />
                              </span>
                              <div className="dash_user">
                                 <img src={item.avatar} alt="" />
                                 <div className="dash_user_info">
                                    <h3>{item.name}</h3>
                                    <span className="dash_review_star">
                                       <Rating
                                          initialRating={item.rating}
                                          emptySymbol={<FaIcons.FaRegStar />}
                                          fullSymbol={<FaIcons.FaStar />}
                                          readonly
                                       />
                                    </span>
                                 </div>
                              </div>
                              <p>{item.comment.slice(0, 180)}</p>
                              <p className="text-center text-white">
                                 {item.email}
                              </p>
                           </SwiperSlide>
                        ))}
                     {reviewsLoading &&
                        [1, 2, 3, 4, 5, 6].map((n) => (
                           <SkeletonPackages key={n} />
                        ))}
                  </Swiper>
               )}

               <div style={{ textAlign: "center" }}>
                  <button className="btn_book" onClick={goToReview}>
                     Please Give Feedback
                  </button>
               </div>
            </section>
         </div>
         <Footer />
      </div>
   );
};

export default DashReview;
