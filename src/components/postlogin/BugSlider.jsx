import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BugSlider = ({ bugs }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    variableWidth: true,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {bugs.map((bug) => (
          <div
            key={bug.id}
            className="bg-white overflow-hidden p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out w-full max-w-[200px] h-full flex flex-col justify-between"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {bug.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {bug.description.substring(0, 120)}...
            </p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-green-600 font-semibold">
                ${bug.bountyAmount}
              </span>
              <span className={`badge ${bug.bountyStatus.toLowerCase()}`}>
                {bug.bountyStatus.charAt(0).toUpperCase() +
                  bug.bountyStatus.slice(1)}
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BugSlider;
