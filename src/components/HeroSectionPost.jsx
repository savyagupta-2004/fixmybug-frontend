import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalImage, setModalImage] = useState("");

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    vertical: true, // Enable vertical scrolling
    verticalSwiping: true,
  };

  const slides = [
    { image: "../Images/welcome.webp" },
    { image: "../Images/affiliate.webp" },
    { image: "../Images/hire.webp" },
  ];

  const modalData = [
    {
      text: "Participate in our exciting challenge...",
      image: "../Images/modaltime.webp",
    },
    {
      text: "Welcome to our bug-fixing platform...",
      image: "../Images/modalfixer.webp",
    },
  ];

  const handleLearnMoreClick = (index) => {
    setModalContent(modalData[index].text);
    setModalImage(modalData[index].image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const customCSS = `
    .responsive-button {
      position: absolute;
      transform: translate(-50%, -50%);
      transition: opacity 0.3s ease-in-out;
      pointer-events: none;
      visibility: hidden;
    }
    @media (min-width: 768px) {
      .responsive-button {
        visibility: visible;
        pointer-events: auto;
      }
    }
  `;
  const bugFixers = [
    {
      id: 1,
      name: "Savya Gupta",
      description:
        "Software Developer with a focus on web applications. he is also passionate about Game development,mobile apps and many more",
      dateJoined: "Jan 15, 2023",
      bugsSolved: 98,
      role: "Student",
      imageUrl: "../Images/savya.webp",
    },
    {
      id: 2,
      name: "Arpita",
      description:
        "Specialist in building scalable web and mobile applications with a focus on user experience and performance.",
      dateJoined: "Mar 22, 2023",
      bugsSolved: 20,
      role: "Employee",
      imageUrl: "../Images/profile.jpeg",
    },
    {
      id: 3,
      name: "Ashmith Kapoor",
      description:
        "Experienced developer proficient in creating dynamic, responsive web applications and intuitive mobile apps.",
      dateJoined: "June 25, 2023",
      bugsSolved: 26,
      role: "Freelancer",
      imageUrl: "../Images/profile.jpeg",
    },
    {
      id: 4,
      name: "Prabhav Sharma",
      description:
        "Developer skilled in crafting high-performance web and mobile solutions tailored to client needs and requirements.",
      dateJoined: "Aug 11, 2023",
      bugsSolved: 31,
      role: "Employee",
      imageUrl: "../Images/profile.jpeg",
    },
    {
      id: 5,
      name: "Aditya Reddy",
      description:
        "Full-stack developer with expertise in web and mobile technologies, delivering robust, user-centric applications.",
      dateJoined: "Oct 15, 2023",
      bugsSolved: 16,
      role: "Student",
      imageUrl: "../Images/profile.jpeg",
    },
    {
      id: 6,
      name: "Shruti",
      description:
        "Proficient in developing cross-platform web and mobile applications, emphasizing seamless user interaction.",
      dateJoined: "Jully 15, 2024",
      bugsSolved: 33,
      role: "Freelancer",
      imageUrl: "../Images/profile.jpeg",
    },
    {
      id: 7,
      name: "Siddharth Yadav",
      description:
        "Dedicated to delivering high-quality web and mobile applications, with a strong emphasis on code efficiency.",
      dateJoined: "Jully 28, 2024",
      bugsSolved: 58,
      role: "Employee",
      imageUrl: "../Images/profile.jpeg",
    },
    {
      id: 8,
      name: "Dhanush Emani",
      description:
        "Experienced in designing and implementing responsive web and mobile apps, ensuring seamless integration.",
      dateJoined: "Aug 2, 2024",
      bugsSolved: 36,
      role: "Student",
      imageUrl: "../Images/profile.jpeg",
    },
    {
      id: 9,
      name: "Virinchi",
      description:
        "Dedicated and Passionate about developing innovative web and mobile solutions that drive user engagement.",
      dateJoined: "Aug 10, 2024",
      bugsSolved: 43,
      role: "Employee",
      imageUrl: "../Images/profile.jpeg",
    },
    {
      id: 10,
      name: "Umesh Krishna",
      description:
        "Developer with a focus on modern web technologies and mobile app development, optimizing functionality.",
      dateJoined: "Sept 5, 2024",
      bugsSolved: 4,
      role: "Student",
      imageUrl: "../Images/profile.jpeg",
    },
    {
      id: 11,
      name: "Qavi Khan",
      description:
        "Specialist in end-to-end development of web and mobile applications, from concept to deployment and scaling.",
      dateJoined: "Sept 5, 2024",
      bugsSolved: 15,
      role: "Employee",
      imageUrl: "../Images/profile.jpeg",
    },
    {
      id: 12,
      name: "Mohmd Murtuza",
      description:
        "Versatile developer skilled in building robust web and mobile applications, focused on performance and security.",
      dateJoined: "Sept 17, 2024",
      bugsSolved: 10,
      role: "Freelancer",
      imageUrl: "../Images/profile.jpeg",
    },
    {
      id: 13,
      name: "Khushi Bansal",
      description:
        "Expert in creating adaptive web and mobile apps that meet diverse user needs while maintaining scalability.",
      dateJoined: "Sept 24, 2024",
      bugsSolved: 12,
      role: "Student",
      imageUrl: "../Images/profile.jpeg",
    },
    {
      id: 14,
      name: "Shreyansh",
      description:
        "Focused on crafting seamless digital experiences through full-stack web and mobile app development.",
      dateJoined: "Oct 12, 2024",
      bugsSolved: 6,
      role: "Employee",
      imageUrl: "../Images/profile.jpeg",
    },
    {
      id: 15,
      name: "Anurag Singh",
      description:
        "Developer known for delivering websites that blend cutting-edge technology with user-friendly interfaces.",
      dateJoined: "Oct 15, 2024",
      bugsSolved: 2,
      role: "Freelancer",
      imageUrl: "../Images/profile.jpeg",
    },
    // Add more bug fixers here...
  ];

  return (
    <>
      <div className="text-center overflow-hidden mt-16">
        <style>{customCSS}</style>

        <div className="flex justify-center gap-4">
          {/* Render three separate sliders */}
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="w-1/3 mt-20 ">
              <Slider {...sliderSettings}>
                {bugFixers.map((fixer) => (
                  <div key={fixer.id}>
                    <div className="bg-[#e6e6e6] mx-auto rounded-lg shadow-md p-6 max-w-[18rem]  w-[17rem]  mb-6 transition duration-300 hover:shadow-xl">
                      {/* <img
                    src={fixer.imageUrl}
                    alt={fixer.name}
                    className="w-full h-48 object-cover rounded-t-lg mb-4"
                  /> */}
                      <div className="px-4">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">
                          {fixer.name}
                        </h2>
                        <p className="text-gray-600">{fixer.description}</p>
                        <div className="mt-4 flex justify-between items-center">
                          <span className="text-sm text-blue-500">
                            Joined: {fixer.dateJoined}
                          </span>
                          <span className="text-sm text-green-500">
                            Bugs Solved: {fixer.bugsSolved}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500 mt-2">
                          Role: {fixer.role}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
