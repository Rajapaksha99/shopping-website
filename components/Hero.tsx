"use client";
import React from 'react';
import Slider from "react-slick";
import Slide from "./Slide";

const Hero = () => {

  // Fixed variable name
  var settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 0,
      img: "/banner-1.jpg",
      title: "trending items",
      mainTitle: "Women's Latest Fashion Sale",
      price: "$15",
    },
    {
      id: 1,
      img: "/banner-22.jpg",
      title: "trending Accessories",
      mainTitle: "Modern Sunglasses",
      price: "$25",
    },
    {
      id: 2, // Changed duplicate ID to 2
      img: "/banner-33.jpg",
      title: "Sale Offer",
      mainTitle: "Men Fashion Summer Sale",
      price: "$30",
    },
  ];

  return (
    <div>
      <div className='container pt-6 lg:pt-0'>
        <Slider {...settings}>
          {slideData.map((item) => (

            <Slide
              key={item.id}
              img={item.img}
              title={item.title}
              mainText={item.mainTitle}
              price={item.price}
              />
              
            
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
