import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/Slider.scss"

import React from 'react'
import Slider from "react-slick";

function Slide() {

    const settings = {
      dots: true,
      infinite: true,
      speed:500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      
    

      };
  return (
    
        <Slider className="slide"  {...settings}>
          <div>
            <img src="/images/slider-badag.jpg" alt="#"/>
          </div>
          <div>
          <img src="/images/slider-badging.jpg" alt="#"/>
          </div>
          <div>
          <img src="/images/slider-scale.jpg" alt="#"/>
          </div>
          <div>
          <img src="/images/slider-scales.jpg" alt="#"/>
          </div>
        
        </Slider>
  )
}

export default Slide