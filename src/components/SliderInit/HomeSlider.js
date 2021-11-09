import React from "react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import pic01 from "../../images/home-img-1.png";
import pic02 from "../../images/home-img-2.png";
import pic03 from "../../images/home-img-3.png";
import HomeNav from "../HomeNav/HomeNav";
import "./HomeSlider.css";

SwiperCore.use([Autoplay, Pagination]);

const HomeSlider = () => {
   return (
      <>
         <Swiper
            grabCursor={true}
            autoplay={{
               delay: 2500,
               disableOnInteraction: false,
            }}
            spaceBetween={30}
            pagination={{
               dynamicBullets: true,
            }}
            className="container home_slider pt-5"
         >
            <SwiperSlide className="row slide_item">
               <div className="col-12 col-md-12 col-lg-6 item_content ">
                  <span className="slider_head">our special dish</span>
                  <h3 className="slider_title">spicy noodles</h3>
                  <p className="slider_text">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Aut dolorem quasi quisquam.
                  </p>
               </div>
               <div className="col-12 col-md-12 col-lg-6 item_content">
                  <img className="img-fluid" src={pic01} alt="" />
               </div>
            </SwiperSlide>
            <SwiperSlide className="row slide_item">
               <div className="col-12 col-md-12 col-lg-6 item_content">
                  <span className="slider_head">our special dish</span>
                  <h3 className="slider_title">chicken tandoori</h3>
                  <p className="slider_text">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Aut dolorem quasi quisquam.
                  </p>
               </div>
               <div className="col-12 col-md-12 col-lg-6 item_content">
                  <img className="img-fluid" src={pic02} alt="" />
               </div>
            </SwiperSlide>
            <SwiperSlide className="row slide_item">
               <div className="col-12 col-md-12 col-lg-6 item_content">
                  <span className="slider_head">our special dish</span>
                  <h3 className="slider_title">Chicken Pizza</h3>
                  <p className="slider_text">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Aut dolorem quasi quisquam.
                  </p>
               </div>
               <div className="col-12 col-md-12 col-lg-6 item_content">
                  <img className="img-fluid" src={pic03} alt="" />
               </div>
            </SwiperSlide>
         </Swiper>
         <HomeNav></HomeNav>
      </>
   );
};

export default HomeSlider;
