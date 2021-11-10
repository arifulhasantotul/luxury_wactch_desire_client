import React from "react";
import { useHistory } from "react-router-dom";
import SwiperCore, { Autoplay, Keyboard, Pagination, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./HomeSlider.css";
import HomeSliderData from "./HomeSliderData";

SwiperCore.use([Autoplay, Pagination, Virtual, Keyboard]);

const HomeSlider = () => {
   const history = useHistory();

   const goToProducts = () => {
      history.push("/products");
   };
   return (
      <div className="home_slider_wrapper">
         <Swiper
            virtual
            grabCursor={true}
            autoplay={{
               delay: 2500,
               disableOnInteraction: false,
            }}
            keyboard={{ enabled: true }}
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
               dynamicBullets: true,
            }}
            className="container home_slider pt-5"
         >
            {HomeSliderData.map((item, index) => (
               <SwiperSlide key={index} className="row slide_item">
                  <div className="col-12 col-md-12 col-lg-6 item_content ">
                     <span className="slider_head">{item.slider_head}</span>
                     <h3 className="slider_title">{item.slider_title}</h3>
                     <p className="slider_text">{item.slider_text}</p>
                     <button
                        style={{
                           width: "30%",
                        }}
                        onClick={goToProducts}
                        className="btn_book"
                     >
                        Explore
                     </button>
                  </div>
                  <div className="col-12 col-md-12 col-lg-6 item_content">
                     <img className="img-fluid" src={item.img} alt="" />
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
};

export default HomeSlider;
