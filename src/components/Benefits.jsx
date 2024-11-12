import React from "react";
import { useNavigate } from "react-router-dom";

const Benefits = () => {
  const navigate = useNavigate();
  const handlenavigatepart = () => {
    navigate("/RequestFix");
  };
  const handlenavigatefull1 = () => {
    navigate("/signup-partTime");
  };
  const handlenavigatefull2 = () => {
    navigate("/signup-fullTime");
  };
  return (
    <>
      <h1 className="text-4xl text-center mb-6 mt-20 font-bold">
        Benefit from<span className="text-[#0c4a6e]"> FixmyBug</span>
      </h1>
      <div className="flex flex-col md:flex-row gap-4 px-5">
        {/* Card 1: Free Trial */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-4 w-full md:w-1/4 flex flex-col h-fit">
          <h3 className="text-black text-2xl font-bold mb-4 text-center">
            Free Trial
          </h3>
          <ul className="space-y-2 flex-grow">
            <li className="flex items-center">
              <span className="mr-2 text-green-600">
                <img src="../Images/tick.webp" alt="tick mark" width={32}></img>
              </span>
              Unlimited bug fixes for 7 months
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-600">
                <img src="../Images/tick.webp" alt="tick mark" width={32}></img>
              </span>
              Access to user-friendly platform
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-600">
                <img src="../Images/tick.webp" alt="tick mark" width={32}></img>
              </span>
              Expert support and guidance
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-600">
                <img src="../Images/tick.webp" alt="tick mark" width={32}></img>
              </span>
              Priority Response Time
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-600">
                <img src="../Images/tick.webp" alt="tick mark" width={32}></img>
              </span>
              Community Support
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-600">
                <img src="../Images/tick.webp" alt="tick mark" width={32}></img>
              </span>
              One click Re-newal
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-red-600 text-5xl">×</span>
              <span className="mt-4"> No refund policy.</span>
            </li>
          </ul>
          <h4 className="text-black font-bold mt-6 mb-2">Requirements:</h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-2 text-black text-xl">•</span>
              Maintain decorum of community; applying for irrelevant bugs could
              lead to a ban.
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-black text-xl">•</span>
              Communicate respectfully with the assigned bug fixer.
            </li>
          </ul>
          <button
            className="w-full bg-[#0c4a6e] text-white font-bold py-2 px-4 rounded transition duration-300 hover:bg-[#0b3a56] mt-4"
            onClick={handlenavigatepart}
          >
            Sign Up Now
          </button>
        </div>

        {/* Card 2: Guaranteed Bug Fix */}
        <div className=" h-fit bg-white rounded-lg shadow-lg p-6 mb-4 w-full md:w-1/4 flex flex-col">
          <h3 className="text-black text-2xl font-bold mb-4 text-center">
            Guaranteed Bug Fix
          </h3>
          <ul className="space-y-2 flex-grow">
            <li className="flex items-center">
              <span className="mr-2 text-green-600">
                <img src="../Images/tick.webp" alt="tick mark" width={32}></img>
              </span>
              Prompt responses to fix requests
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-600">
                <img src="../Images/tick.webp" alt="tick mark" width={32}></img>
              </span>
              Qualified professionals handling issues
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-600">
                <img src="../Images/tick.webp" alt="tick mark" width={32}></img>
              </span>
              Transparency and communication
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-600">
                <img src="../Images/tick.webp" alt="tick mark" width={32}></img>
              </span>
              Dedicated Bug Fix Specialist
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-600">
                <img src="../Images/tick.webp" alt="tick mark" width={32}></img>
              </span>
              Post-Fix Support
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-600">
                <img src="../Images/tick.webp" alt="tick mark" width={32}></img>
              </span>
              Performance Tracking
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-600">
                <img src="../Images/tick.webp" alt="tick mark" width={32}></img>
              </span>
              Detailed Fix Documentation
            </li>
          </ul>
          <h4 className="text-black font-bold mt-6 mb-2">Requirements:</h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-2 text-black text-xl">•</span>
              Maintain decorum of community; applying for irrelevant bugs could
              lead to a ban.
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-black text-xl">•</span>
              Communicate respectfully with the assigned bug fixer.
            </li>
            {/* <li className="flex items-start">
              <span className="mr-2 text-red-600 text-xl">×</span>
              No refund policy.
            </li> */}
          </ul>
          <button
            onClick={handlenavigatepart}
            className="w-full bg-[#0c4a6e] text-white font-bold py-2 px-4 rounded transition duration-300 hover:bg-[#0b3a56] mt-4"
          >
            Apply for a Fix
          </button>
        </div>

        {/* Card 3: Part-Time Bug Fixer */}
        <div className=" h-fit bg-white rounded-lg shadow-lg p-6 mb-4 w-full md:w-1/4 border-4 border-sky-800 flex flex-col">
          <h3 className="text-black text-2xl font-bold mb-4 text-center">
            Part-Time Bug Fixer (Most Popular)
          </h3>
          <ul className="space-y-2 flex-grow">
            <li className="flex items-center">
              <span className="mr-2 text-green-600">
                <img src="../Images/tick.webp" alt="tick mark" width={32}></img>
              </span>
              Flexible working hours
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-600">
                <img src="../Images/tick.webp" alt="tick mark" width={32}></img>
              </span>
              Skill Development Opportunities
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-600">
                <img src="../Images/tick.webp" alt="tick mark" width={32}></img>
              </span>
              Networking Opportunities
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-600">
                <img src="../Images/tick.webp" alt="tick mark" width={32}></img>
              </span>
              Competitive earnings per fix
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-600">
                <img src="../Images/tick.webp" alt="tick mark" width={32}></img>
              </span>
              Performance Bonuses
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-600">
                <img src="../Images/tick.webp" alt="tick mark" width={32}></img>
              </span>
              Feedback and Recognition
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-600">
                <img src="../Images/tick.webp" alt="tick mark" width={32}></img>
              </span>
              Flexible Project Selection
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-600">
                <img src="../Images/tick.webp" alt="tick mark" width={32}></img>
              </span>
              Access to Exclusive Events
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-600">
                <img src="../Images/tick.webp" alt="tick mark" width={32}></img>
              </span>
              Referral Programs
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-600">
                <img src="../Images/tick.webp" alt="tick mark" width={32}></img>
              </span>
              Work-Life Balance Support
            </li>
          </ul>
          <button
            onClick={handlenavigatefull1}
            className="w-full bg-[#0c4a6e] text-white font-bold py-2 px-4 rounded transition duration-300 hover:bg-[#0b3a56] mt-4"
          >
            Join Now
          </button>
        </div>

        {/* Card 4: Full-Time Bug Fixer */}
        <div className=" h-fit bg-white rounded-lg shadow-lg p-6 mb-4 w-full md:w-1/4 flex flex-col">
          <h3 className="text-black text-2xl font-bold mb-4 text-center">
            Full-Time Bug Fixer
          </h3>
          <ul className="space-y-2 flex-grow">
            <li className="flex items-center">
              <span className="mr-2 text-green-600">
                <img src="../Images/tick.webp" alt="tick mark" width={32}></img>
              </span>
              Performance-based stipend
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-600">
                <img src="../Images/tick.webp" alt="tick mark" width={32}></img>
              </span>
              Career advancement opportunities
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-600">
                <img src="../Images/tick.webp" alt="tick mark" width={32}></img>
              </span>
              Exclusive training and resources
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-600">
                <img src="../Images/tick.webp" alt="tick mark" width={32}></img>
              </span>
              Networking with industry leaders
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-600">
                <img src="../Images/tick.webp" alt="tick mark" width={32}></img>
              </span>
              Support for professional development
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-600">
                <img src="../Images/tick.webp" alt="tick mark" width={32}></img>
              </span>
              Competitive salary and benefits package
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-600">
                <img src="../Images/tick.webp" alt="tick mark" width={32}></img>
              </span>
              Opportunities for project leadership
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-600">
                <img src="../Images/tick.webp" alt="tick mark" width={32}></img>
              </span>
              Access to cutting-edge technology and tools
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-600">
                <img src="../Images/tick.webp" alt="tick mark" width={32}></img>
              </span>
              Collaborative work environment
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-600">
                <img src="../Images/tick.webp" alt="tick mark" width={32}></img>
              </span>
              Flexible working hours and remote work options
            </li>
          </ul>
          <h4 className="text-black font-bold mt-6">Requirements:</h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-2 text-black text-xl">•</span>
              Maintain decorum of community; applying for irrelevant bugs could
              lead to a ban.
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-black text-xl">•</span>
              Communicate respectfully with the assigned bug fixer.
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-red-600 text-xl">•</span>
              No refund policy.
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-black text-xl">•</span>
              Resume submission required.
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-black text-xl">•</span>
              GitHub profile link required.
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-black text-xl">•</span>
              LinkedIn profile required for selection.
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-black text-xl">•</span>
              Bachelor's degree in Computer Science or related field.
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-black text-xl">•</span>
              Minimum 2 years of experience in software development.
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-black text-xl">•</span>
              Proficiency in at least 3 programming languages.
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-black text-xl">•</span>
              Strong problem-solving skills and attention to detail.
            </li>
          </ul>
          <button
            onClick={handlenavigatefull2}
            className="w-full bg-[#0c4a6e] text-white font-bold py-2 px-4 rounded transition duration-300 hover:bg-[#0b3a56] mt-4"
          >
            Apply for Full-Time
          </button>
        </div>
      </div>
    </>
  );
};

export default Benefits;
