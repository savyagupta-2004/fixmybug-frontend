import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBug,
  faCalendarAlt,
  faUser,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Latestbugs = () => {
  // Function to determine the number of slides based on window width
  const getSlidesToShow = () => {
    const width = window.innerWidth;
    if (width >= 1200) return 6;
    if (width >= 992) return 4;
    if (width >= 768) return 3;
    if (width >= 576) return 2;
    return 1;
  };

  // State to store the current number of slides to show
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getSlidesToShow());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };
  const bugsData = [
    {
      id: 1,
      company: "KeyNcoders",
      description: "Fixed issue with login page not loading correctly.",
      details: "Resolved by updating authentication methods.",
      difficulty: "Easy",
      date: "2024-08-7",
      developer: "Savya gupta",
      priority: "Low",
      imageFileName: "keyncoders.webp",
    },
    {
      id: 2,
      company: "Raghav",
      description: "Improved page load times by optimizing images.",
      details: "Optimized image formats and lazy loading.",
      difficulty: "Medium",
      date: "2024-09-2",
      developer: "Savya gupta",
      priority: "High",
      imageFileName: "keyncoders.webp",
    },
    {
      id: 3,
      company: "Rohit",
      description: "Addressed bug causing incorrect data to display.",
      details: "Rewrote data fetching logic and improved validations.",
      difficulty: "Hard",
      date: "2024-09-05",
      developer: "Savya gupta",
      priority: "Medium",
      imageFileName: "keyncoders.webp",
    },
    {
      id: 4,
      company: "Anonymous",
      description: "Fixed payment gateway timeout issue.",
      details: "Implemented retries and error handling for the gateway.",
      difficulty: "Medium",
      date: "2024-09-12",
      developer: "Sidhrath Verma",
      priority: "High",
      imageFileName: "keyncoders.webp",
    },
    {
      id: 5,
      company: "Mehul Dharak",
      description: "Responsive issues",
      details: "Resolved by updating authentication methods.",
      difficulty: "Easy",
      date: "2024-09-15",
      developer: "Savya gupta",
      priority: "Low",
      imageFileName: "keyncoders.webp",
    },
    {
      id: 6,
      company: "KeyNcoders",
      description: "Implemented laptop slider",
      details: "Optimized image formats and lazy loading.",
      difficulty: "Medium",
      date: "2024-09-16",
      developer: "Virinchi Edukula",
      priority: "Medium",
      imageFileName: "keyncoders.webp",
    },
    // {
    //   id: 7,
    //   company: "Keshav hurkat",
    //   description: "api endpoints",
    //   details: "Rewrote data fetching logic and improved validations.",
    //   difficulty: "Hard",
    //   date: "2024-09-17",
    //   developer: "Savya gupta",
    //   priority: "High",
    //   imageFileName: "keyncoders.webp",
    // },
    {
      id: 8,
      company: "Arpita",
      description: "Video Streaming",
      details: "Implemented retries and error handling for the gateway.",
      difficulty: "Easy",
      date: "2024-09-20",
      developer: "Savya gupta",
      priority: "High",
      imageFileName: "keyncoders.webp",
    },
  ];

  const cardStyle = {
    perspective: "150rem",
    position: "relative",
    height: "20rem", // Increase height to accommodate more content
    width: "20rem",
    margin: "2rem",
    boxShadow: "none",
    background: "none",
  };

  const cardSideStyle = {
    height: "100%",
    width: "80%",
    borderRadius: "15px",
    transition: "all 0.8s ease",
    backfaceVisibility: "hidden",
    position: "absolute",
    top: 0,
    left: 0,
    padding: "2rem",

    color: "white",
  };

  const frontSideStyle = {
    ...cardSideStyle,
    backgroundColor: "white",
  };

  const backSideStyle = {
    ...cardSideStyle,
    transform: "rotateY(-180deg)",
    backgroundColor: "#4158D0",
    backgroundImage:
      "linear-gradient(43deg, #4158D0 0%,#C850C0 46%, #FFCC70 100%)",
  };

  // Function to determine the tag style based on difficulty
  const getTagStyle = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-700";
      case "Medium":
        return "bg-yellow-100 text-yellow-700";
      case "Hard":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  // Function to get priority style
  const getPriorityStyle = (priority) => {
    switch (priority) {
      case "Low":
        return "text-blue-500";
      case "Medium":
        return "text-yellow-500";
      case "High":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="text-center bg-[#E6E6E6] overflow-hidden">
      <h1 className="text-5xl lg:mt-20 mb-10 font-bold">
        <span className="text-[#0c4a6e]">Recent</span> BugFixes
      </h1>
      <div className="mb-10 px-10 overflow-hidden">
        <Slider {...sliderSettings}>
          {bugsData.map((bug) => (
            <div
              key={bug.id}
              className="p-5 bg-white max-w-[15rem] min-w-4 w-full"
            >
              <div className="card">
                <div className="flex items-center mb-4">
                  <FontAwesomeIcon
                    icon={faBug}
                    className="h-12 w-12 text-[#0c4a6e] mr-3"
                  />
                  <h2 className="text-xl font-bold text-black">
                    {bug.company}
                  </h2>
                </div>
                <p className="text-gray-700">{bug.description}</p>
                <span
                  className={`inline-block mt-3 px-3 py-1 rounded-full text-sm font-semibold ${getTagStyle(
                    bug.difficulty
                  )}`}
                >
                  {bug.difficulty}
                </span>
                <div className="mt-2 flex items-center text-gray-600">
                  <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                  <p>{bug.date}</p>
                </div>
                <div className="flex items-center text-gray-600 mt-1">
                  <FontAwesomeIcon icon={faUser} className="mr-2" />
                  <p>{bug.developer}</p>
                </div>
                <div
                  className={`flex items-center mt-1 ${getPriorityStyle(
                    bug.priority
                  )}`}
                >
                  <FontAwesomeIcon icon={faFlag} className="mr-2" />
                  <p>{bug.priority} Priority</p>
                </div>
                <img
                  src={`../Images/${bug.imageFileName}`}
                  alt={`Bug Fix ${bug.id}`}
                  className="h-full object-contain rounded-lg mt-4"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Latestbugs;
