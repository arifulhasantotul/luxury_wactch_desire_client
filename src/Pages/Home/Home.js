import React from "react";
import { Container } from "react-bootstrap";
import HomeSlider from "../../components/SliderInit/HomeSlider";
import HomeProducts from "./HomeProducts/HomeProducts";

const Home = () => {
   return (
      <Container fluid>
         <HomeSlider />
         <HomeProducts />
      </Container>
   );
};

export default Home;
