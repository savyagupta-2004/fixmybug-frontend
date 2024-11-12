import React from "react";

const AppPromo = () => {
  return (
    <div className="px-10 mb-10 mt-10 ">
      <div className="bg-gradient-to-b from-[#F1EFFF] to-[#DEDAFF] py-4 rounded-3xl">
        <div className="container mx-auto px-6 md:flex md:items-center">
          {/* Left section - Text and bullet points */}
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Join 15 Million students on the app today!
            </h1>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <span className="text-indigo-600 mr-3">
                  <i className="fas fa-check-circle"></i>
                </span>
                <p className="text-gray-700">
                  Live & recorded classes available at ease
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-3">
                  <i className="fas fa-check-circle"></i>
                </span>
                <p className="text-gray-700">Dashboard for progress tracking</p>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-3">
                  <i className="fas fa-check-circle"></i>
                </span>
                <p className="text-gray-700">
                  Millions of practice questions at your fingertips
                </p>
              </li>
            </ul>

            {/* App download buttons */}
            <div className="flex space-x-4">
              <a href="#" className="inline-block">
                <img
                  src="https://placehold.co/150x50"
                  alt="Google Play Store"
                  className="w-40"
                />
              </a>
              <a href="#" className="inline-block">
                <img
                  src="https://placehold.co/150x50"
                  alt="Apple App Store"
                  className="w-40"
                />
              </a>
            </div>
          </div>

          {/* Right section - Image */}
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src="../Images/image.webp"
              alt="App Promo with Person"
              className="w-80 h-auto rounded-[2rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPromo;
