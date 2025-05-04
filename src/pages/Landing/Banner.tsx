"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./banner.css"
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

const ImageCarouselPage = () => {
  return (
    <div className="w-full flex items-center justify-center  px-4">
      
      <div className="w-full ">
        <Carousel
          responsive={responsive}
          arrows={false}
          autoPlay
          autoPlaySpeed={3000}
          keyBoardControl
          showDots={true}
          infinite={true}
          containerClass="carousel-container"
          itemClass="px-2 "
          dotListClass=""
        >
          <div className="w-full h-full flex items-center justify-center">
            <img
              src="/images/header/image1.png"
              alt="Debate Illustration 1"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <img
              src="/images/header/image2.png"
              alt="Debate Illustration 2"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <img
              src="/images/header/image3.png"
              alt="Debate Illustration 3"
              className="w-full h-auto object-contain"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ImageCarouselPage;
