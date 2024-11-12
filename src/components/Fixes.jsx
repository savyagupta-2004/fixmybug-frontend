import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Fixes = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1000, // Adjust this value to change the autoplay speed
    pauseOnHover: true,
    cssEase: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    centerMode: true,
    centerPadding: "50px", // Adjust this value to control the padding around the active slide
  };
  const FloatingDiv = styled.div`
    animation: float 3s ease-in-out infinite;

    @keyframes float {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-5px);
      }
      100% {
        transform: translateY(0);
      }
    }
  `;
  return (
    <div className="mt-4">
      <h1 className="lg:text-5xl md:text-4xl sm:text-2xl text-2xl font-bold text-center mb-12">
        Meet 100's of<span className="text-[#0c4a6e]"> Wrecked </span> websites
        fixed by Fixmybug
      </h1>
      <div className="min-h-[50rem] mt-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-4 mb-16">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 17].map((i) => (
              <FloatingDiv
                key={i}
                className={`col-span-3 md:col-span-2 lg:col-span-3 xl:col-span-4 flex items-center justify-center`}
              >
                <img
                  src={`../Images/bestweb${i}.webp`}
                  alt={`Image ${i}`}
                  className="w-full h-auto object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                />
              </FloatingDiv>
            ))}
          </div>

          <Slider {...sliderSettings}>
            <div
              className="flex justify-center mb-4"
              style={{
                width: `${Math.floor(Math.random() * 200) + 150}px`,
                height: "20rem",
              }}
            >
              <img
                src="../Images/slider1.webp"
                alt="Card 1"
                className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div
              className="flex justify-center mb-4"
              style={{
                width: `${Math.floor(Math.random() * 200) + 150}px`,
                height: "25rem",
              }}
            >
              <img
                src="../Images/slider2.webp"
                alt="Card 2"
                className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div
              className="flex justify-center mb-4"
              style={{
                width: `${Math.floor(Math.random() * 200) + 150}px`,
                height: "300rem",
              }}
            >
              <img
                src="../Images/slider3.webp"
                alt="Card 3"
                className="w-full  object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div
              className="flex justify-center mb-4"
              style={{
                width: `${Math.floor(Math.random() * 200) + 150}px`,
                height: "250px",
              }}
            >
              <img
                src="../Images/slider4.webp"
                alt="Card 4"
                className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>
            {/* <div
              className="flex justify-center mb-4"
              style={{
                width: `${Math.floor(Math.random() * 200) + 150}px`,
                height: "250px",
              }}
            >
              <img
                src="../Images/bestweb5.webp"
                alt="Card 5"
                className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div
              className="flex justify-center mb-4"
              style={{
                width: `${Math.floor(Math.random() * 200) + 150}px`,
                height: "250px",
              }}
            >
              <img
                src="../Images/bestweb6.webp"
                alt="Card 6"
                className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div
              className="flex justify-center mb-4"
              style={{
                width: `${Math.floor(Math.random() * 200) + 150}px`,
                height: "250px",
              }}
            >
              <img
                src="../Images/bestweb7.webp"
                alt="Card 7"
                className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div
              className="flex justify-center mb-4"
              style={{
                width: `${Math.floor(Math.random() * 200) + 150}px`,
                height: "250px",
              }}
            >
              <img
                src="../Images/bestweb8.webp"
                alt="Card 8"
                className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div
              className="flex justify-center mb-4"
              style={{
                width: `${Math.floor(Math.random() * 200) + 150}px`,
                height: "250px",
              }}
            >
              <img
                src="../Images/bestweb9.webp"
                alt="Card 9"
                className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div
              className="flex justify-center mb-4"
              style={{
                width: `${Math.floor(Math.random() * 200) + 150}px`,
                height: "250px",
              }}
            >
              <img
                src="../Images/bestweb10.webp"
                alt="Card 10"
                className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div
              className="flex justify-center mb-4"
              style={{
                width: `${Math.floor(Math.random() * 200) + 150}px`,
                height: "250px",
              }}
            >
              <img
                src="../Images/bestweb11.webp"
                alt="Card 11"
                className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div
              className="flex justify-center mb-4"
              style={{
                width: `${Math.floor(Math.random() * 200) + 150}px`,
                height: "250px",
              }}
            >
              <img
                src="../Images/bestweb12.webp"
                alt="Card 12"
                className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div
              className="flex justify-center mb-4"
              style={{
                width: `${Math.floor(Math.random() * 200) + 150}px`,
                height: "250px",
              }}
            >
              <img
                src="../Images/bestweb13.webp"
                alt="Card 13"
                className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div> */}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Fixes;
