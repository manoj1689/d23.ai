"use client";
import { motion } from "framer-motion";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const debateData = [
  {
    title: "Global Trade Agreements",
    format: "Oxford Style",
    image: "/images/recordings/image1.png",
    date: "Apr 5, 2025",
    duration: "24:18",
  },
  {
    title: "Renewable Energy Transition",
    format: "Lincoln-Douglas",
    image: "/images/recordings/image2.png",
    date: "Apr 2, 2025",
    duration: "32:45",
  },
  {
    title: "Digital Rights & Privacy",
    format: "Parliamentary",
    image: "/images/recordings/image3.png",
    date: "Mar 28, 2025",
    duration: "41:12",
  },
  {
    title: "Education Reform",
    format: "Oxford Style",
    image: "/images/recordings/image4.png",
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
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="flex w-full items-center justify-between mb-6">
          <h2 className="text-xl lg:text-2xl font-semibold text-[#333]">
            Recent Recordings
          </h2>
          <button className="text-sky-600 text-sm font-light hover:underline">
            View All
          </button>
        </div>

        <Carousel
          responsive={responsive}
          arrows
          keyBoardControl
          showDots={true}
          infinite={false}
          containerClass="carousel-container"
          itemClass="px-2 pb-20"
        >
          {debateData.map((debate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="relative">
                <img
                  src={debate.image}
                  alt={debate.title}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                  {debate.duration}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-md">{debate.title}</h3>
                <div className="flex justify-between text-sm text-gray-500 mt-3">
                  <p>{debate.format}</p>
                  <p className="text-gray-400">{debate.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </Carousel>
      </div>
    </motion.section>
  );
};

export default DebateCarousel;
