// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "slick-slider/slick/slick.css";
import "slick-slider/slick/slick-theme.css";
import "./caro.css"
import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 8000,
      autoplaySpeed: 3000,
      cssEase: "linear"
    };
    return (
      <div>
    
        <Slider {...settings}>
          <div>
           <img src="https://www.haribakershop.com/images/image-3.jpg" alt="" />
          </div>
          <div>
           <img src="https://www.haribakershop.com/images/image-2.jpg" alt="" />
          </div>
          <div>
            <img src="https://www.haribakershop.com/images/image-1.jpg" alt="" />
          </div>
          <div>
           <img src="https://www.haribakershop.com/images/image-3.jpg" alt="" />
          </div>
          <div>
           <img src="https://www.haribakershop.com/images/image-2.jpg" alt="" />
          </div>
          <div>
            <img src="https://www.haribakershop.com/images/image-1.jpg" alt="" />
          </div>
         
        </Slider>
      </div>
    );
  }
}