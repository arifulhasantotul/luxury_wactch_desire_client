import React from "react";
import { Container } from "react-bootstrap";
import ReviewSec from "../../components/ReviewSec/ReviewSec";
import HomeSlider from "../../components/SliderInit/HomeSlider";
import HomeProducts from "./HomeProducts/HomeProducts";

const Home = () => {
   return (
      <Container fluid>
         <HomeSlider />
         <HomeProducts />
         <ReviewSec />
      </Container>
   );
};

export default Home;
