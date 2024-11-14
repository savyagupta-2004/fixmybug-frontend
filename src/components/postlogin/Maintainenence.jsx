import React from "react";
import { FaTools } from "react-icons/fa";

const MaintenancePage = () => {
  return (
    <div className="flex items-center justify-center mt-14 bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg text-center border-t-4 border-blue-500">
        <div className="flex flex-col items-center ">
          {/* Maintenance Image */}
          <img
            src="../Images/repair.png" // Placeholder image URL
            alt="Maintenance in Progress"
            className="w-full h-full mb-4 rounded-md"
          />
          {/* Maintenance Icon */}
          <div className="text-blue-500 text-5xl mb-4">
            <FaTools />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-800">
          We’re Currently Under Maintenance
        </h1>
        <p className="text-gray-600 mt-4">
          Our team is working hard to enhance your experience. This page is
          temporarily unavailable as we perform updates and improvements.
        </p>
        <p className="text-gray-500 mt-2">
          Please check back shortly. Thank you for your patience!
        </p>
        <div className="mt-6">
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300"
          >
            Refresh Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;
