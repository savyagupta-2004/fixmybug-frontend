import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBug,
  faCodeBranch,
  faCheckCircle,
  faMessage,
  faUsers,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalImage, setModalImage] = useState("");

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Slide data
  const slides = [
    {
      image: "../Images/timeline.webp",
    },
    {
      image: "../Images/affiliate.webp",
    },

    {
      image: "../Images/hire.webp",
    },
  ];

  // Modal content data
  const modalData = [
    {
      text: "Participate in our exciting challenge where you have the opportunity to resolve a bug within a specified timeframe. By successfully identifying and fixing the issue, you can win amazing prizes worth up to ₹5,000. This initiative not only allows you to showcase your problem-solving skills but also rewards your efforts in a competitive environment. Join us in this engaging activity and put your expertise to the test for a chance to win fantastic rewards. Don't miss out on this opportunity to enhance your skills and be recognized for your talent!",
      image: "../Images/modaltime.webp",
    },
    {
      text: "Welcome to our bug-fixing platform, where we connect developers with the expertise needed to resolve their coding challenges efficiently. By joining our community, you can transform your passion for problem-solving into a rewarding career as a certified bug fixer. Our platform offers an opportunity for business affiliates to enhance their skills, gain valuable experience, and earn recognition in the tech industry. Collaborate with fellow developers, showcase your talent, and make a significant impact in the coding community. Embrace this chance to elevate your career while contributing to a vibrant ecosystem dedicated to quality software development.",
      image: "../Images/modalfixer.webp",
    },
  ];

  // Function to handle button clicks
  const handleLearnMoreClick = (index) => {
    setModalContent(modalData[index].text);
    setModalImage(modalData[index].image);
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const customCSS = `
    .responsive-button {
      position: absolute;
      
      transform: translate(-50%, -50%);
      transition: opacity 0.3s ease-in-out;
      pointer-events: none; /* Prevent interactions */
      visibility: hidden; /* Hide the button completely */
    }

    @media (min-width: 768px) {
      .responsive-button {
        visibility: visible;
        pointer-events: auto;
      }
    }
  `;

  return (
    <>
      <div className="text-center bg-[#E6E6E6] overflow-hidden mt-16">
        {/* Slider Section */}
        <style>{customCSS}</style>
        <div className="mb-10 ">
          <Slider {...sliderSettings}>
            {slides.map((slide, index) => (
              <div key={index} className="relative">
                <img
                  src={slide.image}
                  alt=""
                  className="w-full md:h-[390px] lg:h-[390px] h-fit object-contain md:object-cover lg:object-cover mx-auto "
                />
                {/* Responsive buttons */}
                {index === 0 && (
                  <button
                    onClick={() => handleLearnMoreClick(0)}
                    className="lg:bottom-[5rem] lg:right-[28rem] md:right-[8.6rem] md:bottom-[8rem] responsive-button bg-sky-900 lg:p-3 md:p-1 text-white rounded-lg hover:bg-sky-800 transition-all duration-300 ease-in-out"
                  >
                    Learn More
                  </button>
                )}
                {index === 1 && (
                  <button
                    onClick={() => handleLearnMoreClick(1)}
                    className="lg:bottom-[7rem] lg:left-[11.7rem] md:bottom-[8rem] md:left-[6.5rem] responsive-button bg-sky-900 lg:p-3 md:p-1 text-white rounded-lg hover:bg-sky-800 transition-all duration-300 ease-in-out"
                  >
                    Learn More
                  </button>
                )}
              </div>
            ))}
          </Slider>
        </div>

        {/* Original Hero Section Content */}
        <div
          className={`flex flex-col gap-5 my-10 ${
            isModalOpen ? "blur-sm" : ""
          }`}
        >
          <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium">
            No. 1 Bug Hunt Website
          </span>

          <h1 className="text-3xl font-bold">
            FixmyBug <br />
            <span className="text-[#0c4a6e]">No Bug Left Behind</span>
          </h1>

          <p className="text-xl">
            You are just one step away from getting your{" "}
            <span className="text-black font-bold">Bug Fixed</span>
          </p>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-md mx-auto md:w-fit sm:w-[30rem] w-[20rem]">
            {/* Card 1: Apply for a Bug */}

            <div className="bg-white rounded-lg shadow-lg p-6">
              <FontAwesomeIcon
                icon={faUser}
                className="h-12 w-12 text-[#0c4a6e] mx-auto mb-4"
              />
              <h2 className="text-xl font-bold mb-2">Apply for a Bug</h2>
              <p className="text-gray-700">
                Share your GitHub repository link where you're facing a bug. Our
                team will review your request and assign a suitable bug fixer.
              </p>
            </div>

            {/* Card 2: Get Assigned a Bug Fixer */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <FontAwesomeIcon
                icon={faUsers}
                className="h-12 w-12 text-[#0c4a6e] mx-auto mb-4"
              />
              <h2 className="text-xl font-bold mb-2">
                Get Assigned a Bug Fixer
              </h2>
              <p className="text-gray-700">
                Once your application is approved, our system will automatically
                assign a qualified bug fixer to your project.
              </p>
            </div>

            {/* Card 3: Communicate with Bug Fixer */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <FontAwesomeIcon
                icon={faMessage}
                className="h-12 w-12 text-[#0c4a6e] mx-auto mb-4"
              />
              <h2 className="text-xl font-bold mb-2">
                Communicate with Bug Fixer
              </h2>
              <p className="text-gray-700">
                You can communicate with your assigned bug fixer through our
                platform. Discuss the bug, ask questions, and clarify any
                doubts.
              </p>
            </div>

            {/* Card 4: Get Your Issue Solved */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <FontAwesomeIcon
                icon={faCodeBranch}
                className="h-12 w-12 text-[#0c4a6e] mx-auto mb-4"
              />
              <h2 className="text-xl font-bold mb-2">Get Your Issue Solved</h2>
              <p className="text-gray-700">
                The bug fixer will work on your issue and provide updates
                throughout the process. Once fixed, they'll create a pull
                request on your repository.
              </p>
            </div>

            {/* Card 5: Review and Accept Changes */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="h-12 w-12 text-[#0c4a6e] mx-auto mb-4"
              />
              <h2 className="text-xl font-bold mb-2">
                Review and Accept Changes
              </h2>
              <p className="text-gray-700">
                After reviewing the fix, you can accept the changes or request
                further modifications. Once accepted, the fix is complete!
              </p>
            </div>

            {/* Card 6: Rate Your Experience */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <FontAwesomeIcon
                icon={faStar}
                className="h-12 w-12 text-[#0c4a6e] mx-auto mb-4"
              />
              <h2 className="text-xl font-bold mb-2">Rate Your Experience</h2>
              <p className="text-gray-700">
                Help us improve by rating your experience. Your feedback is
                valuable in maintaining high-quality bug fixes.
              </p>
            </div>
          </div>

          {/* Optional additional info */}
          <p className="text-gray-700 mt-5 text-balance">
            All services are free for mern stack! Just share your GitHub
            repository, and we'll handle the rest.
          </p>
        </div>

        {/* Modal Section */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-[700px] w-full flex">
              <img
                src={modalImage}
                alt="Modal Content"
                className="w-1/3 h-auto mr-4 rounded"
              />
              <div className="flex flex-col justify-center">
                <h2 className="text-xl font-bold mb-4">More Information</h2>
                <p className="text-gray-700">{modalContent}</p>
                <button
                  onClick={closeModal}
                  className="mt-4 px-4 py-2 bg-sky-900 text-white rounded-lg"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HeroSection;
