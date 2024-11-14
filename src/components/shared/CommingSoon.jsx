import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Timer from "./Timer";

const ComingSoon = ({ notify }) => {
  const handlealert = () => {
    notify("Thanks! You will be notified Shortly");
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="flex items-center justify-center h-screen bg-white relative overflow-hidden">
        {/* Background Decorations */}
        <div className="w-full h-full absolute top-0 left-0 overflow-hidden">
          {/* Random Color Shapes */}
          <div className="absolute top-5 left-8 w-5 h-5 bg-pink-500 rounded-full animate-bounce"></div>
          <div className="absolute top-24 right-12 w-6 h-6 bg-yellow-500 rotate-45 transform"></div>
          <div className="absolute top-1/3 left-20 w-4 h-4 bg-green-500 rounded-full animate-spin"></div>
          <div className="absolute bottom-24 right-16 w-5 h-5 bg-blue-500"></div>
          <div className="absolute bottom-32 left-10 w-7 h-7 bg-purple-500 rotate-45 transform animate-pulse"></div>
          <div className="absolute top-10 left-3/4 w-6 h-6 bg-teal-500 rounded"></div>
          <div className="absolute bottom-10 right-10 w-4 h-4 bg-pink-500 rotate-45 transform"></div>
          <div className="absolute top-28 left-1/4 w-5 h-5 bg-orange-500 animate-bounce"></div>
          <div className="absolute bottom-40 right-1/2 w-6 h-6 bg-red-500 rounded-full"></div>
          <div className="absolute top-3/4 right-20 w-4 h-4 bg-purple-500"></div>
          <div className="absolute bottom-10 left-1/3 w-5 h-5 bg-yellow-500 animate-spin"></div>
          <div className="absolute top-20 right-1/4 w-6 h-6 bg-blue-500 rotate-45 transform animate-pulse"></div>
          <div className="absolute bottom-1/4 left-3/4 w-4 h-4 bg-teal-500 rounded animate-bounce"></div>
          <div className="absolute top-1/2 right-1/3 w-5 h-5 bg-pink-500 rounded-full"></div>
          <div className="absolute bottom-5 left-5 w-6 h-6 bg-purple-500 rotate-45 transform animate-pulse"></div>
        </div>

        {/* Main Content */}
        <div className="text-center z-10 bg-[#e6e6e6] bg-opacity-80 px-10 py-16 rounded-lg shadow-lg">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4 animate-pulse">
            COMING SOON
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            We will be celebrating the launch of our new site very soon!
          </p>
          <div className="flex gap-4">
            <Timer></Timer>
            <button
              onClick={handlealert}
              className="bg-teal-500 text-white py-2 px-6 rounded-md font-semibold hover:bg-teal-600 transition duration-300"
            >
              Notify Me!
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ComingSoon;
