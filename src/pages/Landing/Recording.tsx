"use client"
// DebateCarousel.tsx
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const debateData = [
  {
    title: "Global Trade Agreements",
    format: "Oxford Style",
    image: "./images/recordings/image1.png",
    date: "Apr 5, 2025",
    duration: "24:18",
  },
  {
    title: "Renewable Energy Transition",
    format: "Lincoln-Douglas",
    image: "./images/recordings/image2.png",
    date: "Apr 2, 2025",
    duration: "32:45",
  },
  {
    title: "Digital Rights & Privacy",
    format: "Parliamentary",
    image: "./images/recordings/image3.png",
    date: "Mar 28, 2025",
    duration: "41:12",
  },
  {
    title: "Education Reform",
    format: "Oxford Style",
    image: "./images/recordings/image4.png",
    date: "Mar 25, 2025",
    duration: "36:29",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

const DebateCarousel = () => {
  return (
    <div className="container mx-auto p-4 py-8 ">
       <div className='flex w-full items-center justify-between mb-4'>
  <h2 className="text-xl font-semibold">Recent Recordings</h2>
  <button className="text-sky-600 text-lgfont-medium hover:underline">View All</button>
</div>

   
      <Carousel
        responsive={responsive}
        arrows
        autoPlaySpeed={3000}
        keyBoardControl
        showDots={true}
        infinite={false}
        containerClass="carousel-container"
        itemClass="px-2 py-12"
      >
        {debateData.map((debate, index) => (
          <div key={index} className="bg-white rounded shadow-md overflow-hidden">
            <div className="relative">
              <img src={debate.image} alt={debate.title} className="w-full h-48 object-cover" />
              <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                {debate.duration}
              </span>
            </div>
            <div className="p-3">
              <h3 className="font-bold text-md">{debate.title}</h3>
              <p className="text-sm text-gray-500">{debate.format}</p>
              <p className="text-sm text-gray-400">{debate.date}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default DebateCarousel;

