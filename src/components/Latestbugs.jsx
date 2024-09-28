import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBug,
  faCalendarAlt,
  faUser,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";

const Latestbugs = () => {
  // Data for each bug fix with additional properties
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
      imageFileName: "keyncoders.png",
    },
    {
      id: 2,
      company: "Ashmith Kapoor",
      description: "Improved page load times by optimizing images.",
      details: "Optimized image formats and lazy loading.",
      difficulty: "Medium",
      date: "2024-09-2",
      developer: "Savya gupta",
      priority: "High",
      imageFileName: "ash.png",
    },
    {
      id: 3,
      company: "Aakash ",
      description: "Addressed bug causing incorrect data to display.",
      details: "Rewrote data fetching logic and improved validations.",
      difficulty: "Hard",
      date: "2024-09-05",
      developer: "Savya gupta",
      priority: "Medium",
      imageFileName: "aakash.jpg",
    },
    {
      id: 4,
      company: "Snehil Singh",
      description: "Fixed payment gateway timeout issue.",
      details: "Implemented retries and error handling for the gateway.",
      difficulty: "Medium",
      date: "2024-09-12",
      developer: "Savya gupta",
      priority: "High",
      imageFileName: "snehil.jpg",
    },
    {
      id: 5,
      company: "Raghav sharma",
      description: "Responsive issues",
      details: "Resolved by updating authentication methods.",
      difficulty: "Easy",
      date: "2024-09-15",
      developer: "Savya gupta",
      priority: "Low",
      imageFileName: "raghav.jpg",
    },
    {
      id: 6,
      company: "KeyNcoders",
      description: "Implemented laptop slider",
      details: "Optimized image formats and lazy loading.",
      difficulty: "Medium",
      date: "2024-09-16",
      developer: "Savya gupta",
      priority: "Medium",
      imageFileName: "keyncoders.png",
    },
    {
      id: 7,
      company: "Keshav hurkat",
      description: "api endpoints",
      details: "Rewrote data fetching logic and improved validations.",
      difficulty: "Hard",
      date: "2024-09-17",
      developer: "Savya gupta",
      priority: "High",
      imageFileName: "keyncoders.png",
    },
    {
      id: 8,
      company: "Ashmith kapoor",
      description: "Video Streaming",
      details: "Implemented retries and error handling for the gateway.",
      difficulty: "Easy",
      date: "2024-09-20",
      developer: "Savya gupta",
      priority: "High",
      imageFileName: "ash.png",
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
    <div className="max-w-7xl mx-auto mb-20 overflow-hidden ">
      <h1 className="text-4xl font-bold text-center">
        <span className="text-[#6A38C2]">Recent</span> BugFixes
      </h1>

      {/* Grid layout for all cards */}
      <div className="grid grid-cols-1 mx-auto justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  sm:justify-items-center sm:ml-16">
        {bugsData.map((bug) => (
          <div
            key={bug.id}
            className="card mx-auto"
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.querySelector(".front").style.transform =
                "rotateY(180deg)";
              e.currentTarget.querySelector(".back").style.transform =
                "rotateY(0deg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector(".front").style.transform =
                "rotateY(0deg)";
              e.currentTarget.querySelector(".back").style.transform =
                "rotateY(-180deg)";
            }}
          >
            {/* Front side of the card */}
            <div
              className="card-side front  sm:m-0 mx-[2rem]"
              style={frontSideStyle}
            >
              <div className="flex items-center mb-4">
                <FontAwesomeIcon
                  icon={faBug}
                  className="h-12 w-12 text-[#6A38C2] mr-3"
                />
                <h2 className="text-xl font-bold text-black">{bug.company}</h2>
              </div>
              <p className="text-gray-700">{bug.description}</p>

              {/* Difficulty Tag */}
              <span
                className={`inline-block mt-3 px-3 py-1 rounded-full text-sm font-semibold ${getTagStyle(
                  bug.difficulty
                )}`}
              >
                {bug.difficulty}
              </span>

              {/* Bug Date */}
              <div className="mt-2 flex items-center text-gray-600">
                <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                <p>{bug.date}</p>
              </div>

              {/* Developer Assigned */}
              <div className="flex items-center text-gray-600 mt-1">
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                <p>{bug.developer}</p>
              </div>

              {/* Priority */}
              <div
                className={`flex items-center mt-1 ${getPriorityStyle(
                  bug.priority
                )}`}
              >
                <FontAwesomeIcon icon={faFlag} className="mr-2" />
                <p>{bug.priority} Priority</p>
              </div>
            </div>

            {/* Back side of the card */}
            <div className="card-side back" style={backSideStyle}>
              <img
                src={`../Images/${bug.imageFileName}`}
                alt={`Bug Fix ${bug.id}`}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latestbugs;
