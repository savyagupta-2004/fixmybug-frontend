import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Profile from "./postlogin/Profile";

const Hierapro = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // large screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // medium screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="mt-20 text-black">
      <div className="container mx-auto px-4">
        <h1 className="lg:text-5xl md:text-4xl sm:text-2xl text-2xl font-bold lg:mb-12 md:mb-10 sm:mb-5 mb-4 text-center">
          Meet Our Expert <span className="text-[#0c4a6e]">BugFixers</span>
        </h1>

        <Slider {...sliderSettings}>
          <div className="p-4">
            {" "}
            {/* Adds padding to create space around each card */}
            <Profile
              name="Savya Gupta"
              image="../Images/founder.webp"
              city="Hyderabad, Telangana"
              role="Full-Stack Developer"
              experience="Experienced Full-Stack Developer specializing in creating robust web applications with a seamless user experience."
            />
          </div>
          <div className="p-4">
            <Profile
              name="Naval Bihani"
              image="../Images/naval.webp"
              city="Noida, Delhi"
              role="ML Enthusiast"
              experience="Machine Learning enthusiast skilled in developing intelligent solutions for complex data-driven applications."
            />
          </div>
          <div className="p-4">
            <Profile
              name="Dhanush Emani"
              image="../Images/dhan.webp"
              city="Warangal, Telangana"
              role="Front-End Developer"
              experience="Front-End Developer proficient in modern web technologies to craft visually appealing and interactive user interfaces."
            />
          </div>
          <div className="p-4">
            <Profile
              name="Virinchi Edukula"
              image="../Images/vir1.webp"
              city="Kamand, Himachal Pradesh"
              role="Java Full Stack"
              experience="Java Full Stack Developer focused on building scalable applications with clean code and efficient back-end processes."
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Hierapro;
