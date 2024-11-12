import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideShow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      image: "https://via.placeholder.com/800x400", // Add your image URLs here
      title: "Master React in 2024!",
      description: "Learn to build modern web apps with React and more.",
    },
    {
      image: "https://via.placeholder.com/800x400",
      title: "Master Node.js",
      description: "Build powerful backend applications.",
    },
    {
      image: "https://via.placeholder.com/800x400",
      title: "Full Stack Development",
      description: "Learn MERN stack and become a full stack developer.",
    },
  ];

  return (
    <div className="w-full h-[400px]">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4">
              <h2 className="text-3xl font-bold">{slide.title}</h2>
              <p className="text-lg mt-2">{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideShow;
