import React from "react";
import { useNavigate } from "react-router-dom";

const WhyGoWithUs = () => {
  const navigate = useNavigate();
  const handlenaviagte = () => {
    navigate("/about-us");
  };

  return (
    <div className="bg-gradient-to-r from-[#E6E6FA] to-[#ADD8E6] pt-16 mt-36 mb-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0 px-4 lg:px-0">
        {/* Left: Person Image and Details */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
          <img
            src="../Images/haha.webp"
            alt="Guide Person"
            className="w-full max-w-[30rem] lg:max-w-[55rem] h-auto lg:h-[30rem] object-cover "
          />
        </div>

        {/* Right: Text Content */}
        <div className="max-w-lg text-center lg:text-left px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            <span className="m"> Why go with </span>
            <span className="s">FixMyBug?</span>
          </h2>
          <p className="text-base lg:text-lg text-gray-700 mb-6">
            Because we know that even the best technology is only as good as the
            people behind it. That's why we offer expert support, plus a lot
            more.
          </p>
          <button
            className="px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition-colors"
            onClick={handlenaviagte}
          >
            Get Help
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyGoWithUs;
