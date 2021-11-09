import React from "react";
import { Container } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import Rating from "react-rating";
import SwiperCore, {
   Autoplay,
   EffectCoverflow,
   Keyboard,
   Pagination,
   Virtual,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { reviewData } from "./ReviewData";
import "./ReviewSec.css";

SwiperCore.use([Virtual, EffectCoverflow, Pagination, Autoplay, Keyboard]);

const ReviewSec = () => {
   return (
      <Container className="review">
         <h3 className="sub_heading">Customer's review</h3>
         <h1 className="heading">what they say</h1>
         {reviewData.length > 0 && (
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
               {reviewData.map((item, index) => (
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
                     <p>{item.comment}</p>
                  </SwiperSlide>
               ))}
            </Swiper>
         )}
      </Container>
   );
};

export default ReviewSec;
