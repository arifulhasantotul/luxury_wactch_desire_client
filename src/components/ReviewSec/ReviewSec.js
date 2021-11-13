import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
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
import SkeletonPackages from "../Skeleton/SkeletonPackages";
import "./ReviewSec.css";

SwiperCore.use([Virtual, EffectCoverflow, Pagination, Autoplay, Keyboard]);

const ReviewSec = () => {
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
      <Container fluid className="review">
         <h1 className="heading">
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
               slidesPerView={2}
               spaceBetween={20}
               breakpoints={{
                  1024: {
                     slidesPerView: 2,
                     spaceBetween: 30,
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
                        <span className="review_quote">
                           {" "}
                           <FaIcons.FaQuoteRight />
                        </span>
                        <div className="user">
                           <img src={item.avatar} alt="" />
                           <div className="user_info">
                              <h3>{item.name}</h3>
                              <span className="review_star">
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
                        <p className="text-center text-white">{item.email}</p>
                     </SwiperSlide>
                  ))}
               {reviewsLoading &&
                  [1, 2, 3, 4, 5, 6].map((n) => <SkeletonPackages key={n} />)}
            </Swiper>
         )}

         <div style={{ textAlign: "center" }}>
            <button className="btn_book" onClick={goToReview}>
               Please Give Feedback
            </button>
         </div>
      </Container>
   );
};

export default ReviewSec;
