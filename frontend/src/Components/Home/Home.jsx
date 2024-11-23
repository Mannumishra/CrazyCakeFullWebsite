import React from "react";
import HomeBannerSlider from "../BannerSlider/HomeBannerSlider";
import Hero from "../Hero/Hero";
import AllProducts from "../AllProducts/AllProducts";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <HomeBannerSlider />
      <Hero />
      <AllProducts />
      <Testimonial />
    </>
  );
};

export default Home;
