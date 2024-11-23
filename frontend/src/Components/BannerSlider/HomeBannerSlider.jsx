import React from 'react';
import Slider from 'react-slick';
import banner1 from '../../images/banner/banner1.jpg';
import banner2 from '../../images/banner/banner2.jpg';
import './homebanner.css'
const HomeBannerSlider = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,           
    autoplaySpeed: 3000,      
    waitForAnimate: false,
    arrows: false,            
  };

  return (
    <div className="container-fluid px-0 position-relative">
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img className="img-fluid w-100" alt="bannerImage" src={banner1} />
          </div>
          <div>
            <img className="img-fluid w-100" alt="bannerImage" src={banner2} />
          </div>
          <div>
            <img className="img-fluid w-100" alt="bannerImage" src={banner1} />
          </div>
          <div>
            <img className="img-fluid w-100" alt="bannerImage" src={banner2} />
          </div>
        </Slider>
      </div>

      {/* Fixed overlay content */}
      <div className="overlay-content start-50 translate-middle text-center text-white">
        <div className='overlay'>
        <div className='bannerContent'>

        <h1>We Bake Happiness</h1>
        <p className="lead">"Without Eggs As Well"</p>
        <a className='ordernowBtn' href="">ORDER NOW</a>
        <h5>Or Call <a href="tel:+919999999999">+91 9999999999</a></h5>
        </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBannerSlider;
